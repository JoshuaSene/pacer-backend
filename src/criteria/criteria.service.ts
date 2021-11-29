import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Criteria } from './entities/criteria.entity';
import { CreateCriteriaDto } from './dto/create-criteria.dto';
import { UpdateCriterionDto } from './dto/update-criteria.dto';

@Injectable()
export class CriteriaService {

  constructor(
    @InjectRepository(Criteria)
    private criterionRepository: Repository<Criteria>
  ) {}

  //Pesquisa critério pela descrição exata.
  async findByDesc(descCriteria: string): Promise<Criteria> {
    return await this.criterionRepository
      .createQueryBuilder('criteria')
      .where('criteria.desc_criteria = :desc', { desc: descCriteria })
      .getOne();
  }

  // Inclusão de novo critério
  async create(createCriteriaDto: CreateCriteriaDto): Promise<Criteria> {
    if (createCriteriaDto.descCriteria.replace(" ","").length===0){
      throw new ConflictException("Descrição do critério não foi informado!");
    }
    const existe = await this.findByDesc(createCriteriaDto.descCriteria);
    if (existe){
      throw new ConflictException("Já existe um critério com esta descrição: " + createCriteriaDto.descCriteria);
    }
    try {
      return this.criterionRepository.save(createCriteriaDto);
    } catch (error) {
      throw new ConflictException("Erro ao incluir o critério : " + createCriteriaDto.descCriteria)
    }
  }

  //Lista total de critérios ordenados alfabeticamente (Ativos primeiro)
  async findAll(): Promise<Criteria[]> {
    return await this.criterionRepository.find({
      order: { snAtivo: 'DESC', descCriteria: 'ASC' },
    });
  }

  //Busca critério por id.
  async find(id: string): Promise<Criteria[]> {
    try {
      return await this.criterionRepository.find({ idCriteria: `${id}` });
    } catch (error) {
      throw new NotFoundException('Critério não existe : ' + id);
    }
  }

  //Atualiza dados de um critério.
  async update(
    id: string,
    updateCriterionDto: UpdateCriterionDto,
  ): Promise<Criteria> {
    const existe = await this.findByDesc(updateCriterionDto.descCriteria);
    if (existe && existe.idCriteria !== id){
      throw new ConflictException("Já existe outro critério com o mesmo nome: " + updateCriterionDto.descCriteria);
    }
    const criteria: any = await this.criterionRepository.findOne(id);
    const mergeCriteria = this.criterionRepository.merge(
      criteria,
      updateCriterionDto,
    );
    try {
      return await this.criterionRepository.save(mergeCriteria);
    } catch (error) {
      throw new ConflictException("O critério não pode ser alterado!")
    }
  }

  async delete(id: string): Promise<string> {
    try {
      await this.criterionRepository.delete(id);
    } catch (error) {
      const lastId: Criteria = await this.criterionRepository.findOne(id);
      if (lastId !== null) {
        throw new ConflictException(
          'O critério não pode ser excluído, pois já está sendo usado!',
        );
      }
      throw new ConflictException(error);
    }
    return `id ${id} has been deleted`;
  }
}
