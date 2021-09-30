import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(User) 
        private repository: Repository<User>,
    ) {}

    async create(createuserDto: CreateUserDto): Promise<User> {
        const createdUser = await this.repository.create(
            createuserDto
        ); 
        return await this.repository.save(createdUser);
    }

    async findAll(): Promise<User[]> {
        return this.repository.find();
    }

    async findOne(id: string): Promise<User> {
        return await this.repository.findOne(id);
    }

    async update(id: string, dto: UpdateUserDto): Promise<User> {
        const user = await this.repository.findOne(id);
        const merge = this.repository.merge(user, dto);
        return await this.repository.save(merge);
    }

    async remove(id: string): Promise<string>  {
        const user = await this.repository.findOne(id);
        this.repository.delete(user.idUser);
        return `User ${id} has been deleted`;
    }
}