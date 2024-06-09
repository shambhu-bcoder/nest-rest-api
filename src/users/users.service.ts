import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { ObjectId } from 'mongodb';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async setPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 10);
    }
    randomPin(): string {
        return Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit random pin
    }
    async create(createUserDto: CreateUserDto) {
        return this.userRepository.create(createUserDto);
    }

    findAll() {
        return { isSuccess: true, items: [] };
    }

    async findOne(id: string) {
        const objectId = new ObjectId(id);
        return await this.userRepository.findOneBy({ id: objectId });
    }

    async update(
        id: string,
        updateUserDto: Partial<UpdateUserDto>,
    ): Promise<any> {
        const objectId = new ObjectId(id);
        const result = await this.userRepository.update(
            { id: objectId },
            updateUserDto,
        );
        return result;
    }

    remove(id: string) {
        return this.userRepository.delete(id);
    }
}
