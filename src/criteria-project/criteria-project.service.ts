import { getConnection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ConflictException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { Sprint } from '../sprint/entities/sprint.entity';
import { Project } from '../project/entities/project.entity';
import { CriteriaProject } from './entities/criteria-project.entity';
import { NotesStore } from '../notes-store/entities/notes-store.entity';
import { CreateCriteriaProjectDto } from './dto/create-criteria-project.dto';
import { UpdateCriteriaProjectDto } from './dto/update-criteria-project.dto';
@Injectable()
export class CriteriaProjectService {
  constructor(
    @InjectRepository(CriteriaProject)
    private repository: Repository<CriteriaProject>,
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  valid( idProject: string, idCriteria: string): void {
    //Verifica se o PROJETO foi informado
    if (idProject.replace(' ', '').length === 0) {
      throw new NotFoundException('O projeto não foi informado!');
    }
    //Verifica se o CRITÉRIO foi informado
    if (idCriteria.replace(' ', '').length === 0) {
      throw new NotFoundException('O critério não foi informado!');
    }
  }

  async findAll(): Promise<CriteriaProject[]> {
    return this.repository.find();
  }

  /**
   * Retorna um CriteriaProject com exceção
   * @param idCriteria 
   * @param idProject 
   * @returns CriteriaProject || Exception
   */
  async find(idCriteria: string, idProject: string): Promise<CriteriaProject> {
    const criteria = await this.repository.findOne({
      where: {
        idCriteria: `${idCriteria}`,
        idProject: `${idProject}`,
      },
    });
    if (!criteria) {
      throw new NotFoundException(
        `CriteriaProject does not exists for project: ${idProject} and criteria: ${idCriteria}.`,
      );
    }
    return criteria;
  }

  /**
   * Lista de critérios de um projeto
   **/
  async findByProject(idProject: string): Promise<CriteriaProject[]> {
    try {
      const project = await this.projectRepository.findOne(idProject);
      return await this.repository.find({
        where: { project: project },
        order: { snActivated: 'DESC', idCriteria: 'ASC' },
      });
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }

  async findForCriteria(idCriteria: string, snActivated: string): Promise<CriteriaProject[]> {
    const criterias = await this.repository.find({
      where: {
        idCriteria: `${idCriteria}`,
        snActivated: `${snActivated}`,
      },
    });

    if (!criterias || criterias.length == 0) {
      throw new NotFoundException(
        `CriteriaProject does not exists for criteria: ${idCriteria}.`,
      );
    }
    return criterias;
  }

  /**
   * CREATE
   * @param createCriteriaDto 
   * @returns 
   */
  async create(dto: CreateCriteriaProjectDto): Promise<CriteriaProject> {
    this.valid(dto.idProject,dto.idCriteria);

    const criteria: CriteriaProject = await this.repository.findOne({
      where: {
        idCriteria: `${dto.idCriteria}`,
        idProject: `${dto.idProject}`,
      },
    });

    if (criteria){
      throw new ConflictException("Este critério já está cadastrado no projeto!");
    }

    try {
      dto.snActivated = 'S';
      return this.repository.save(dto);
    } catch (error) {
      console.log(error);
      throw new HttpException('Erro de inclusão: Critério no projeto!', 500);
    }
  }

  /**
   * UPDATE
   * @param dto 
   * @returns 
   */
  async update(dto: UpdateCriteriaProjectDto): Promise<CriteriaProject> {
    this.valid(dto.idProject, dto.idCriteria);
  
    const criteria: CriteriaProject = await this.repository.findOne({
      where: {
        idCriteria: `${dto.idCriteria}`,
        idProject: `${dto.idProject}`,
      },
    });

    if (!criteria) {
      throw new NotFoundException(
        "Critério do projeto não localizado!",
      );
    }

    const merge = this.repository.merge(criteria, dto);
    return this.repository.save(merge);
  }

  /**
   * Exclusão de Vínculo de Critério em Projeto.
   * Se já existir alguma linha de nota gerada não pode excluir.
   * @param idProject
   * @param idCriteria
   * @returns void
   */
  async delete(idProject: string, idCriteria: string): Promise<void> {
    //Se já existir notas para este projeto não pode excluir
    let qtdNotes = 0;
    try {
      qtdNotes = await getConnection()
        .createQueryBuilder()
        .from(Sprint, 'sprint')
        .addFrom(NotesStore, 'notes')
        .where("notes.idCriteria = :idCriteria", { idCriteria: idCriteria})
        .andWhere('notes.idSprint = sprint.idSprint')
        .andWhere('sprint.idProject = :idProject', { idProject: idProject })
        .getCount();
    } catch (error) {
      throw new HttpException(
        'Erro desconhecido na verificação de avaliações pendentes deste projeto!',
        500,
      );
    }

    if (qtdNotes > 0) {
      throw new ConflictException(
        'Já existem avaliações pendentes para este projeto. Exclusão não permitida!',
      );
    }

    let criteriaProject: CriteriaProject = null;
    try {
      criteriaProject = await this.repository.findOne({
        where: {
          idProject: `${idProject}`,
          idCriteria: `${idCriteria}`, 
        },
      });
    } catch (error) {
      console.log(error);
      throw new HttpException("Erro desconhecido na busca pelo critério que será excluído!", 500);
    }

    if (!criteriaProject) {
      throw new NotFoundException("Critério do Projeto não foi localizado para exclusão!");
    }

    try {
      this.repository.delete(criteriaProject);
    } catch (error) {
      throw new HttpException("Erro desconhecido na exclusão do critério!",500);
    }
  }
}
