import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        const model = this.createUserModel(createUserDto);

        if (createUserDto.password) {
            model.password = await this.usersService.setPassword(
                createUserDto.password,
            );
        }

        const createdByAdmin = this.checkIfCreatedByAdmin(model.role); // Replace this with actual logic

        if (createdByAdmin) {
            model.isEmailVerified = createUserDto.authMethod === 'email';
            model.isPhoneVerified = createUserDto.authMethod === 'phone';
            model.status = 'active';
        } else {
            model.activationCode = this.usersService.randomPin();
        }

        return this.usersService.create(model);
    }

    private createUserModel(createUserDto: CreateUserDto): any {
        const {
            firstName,
            lastName,
            fullName,
            authMethod,
            userName,
            email,
            phone,
            status,
            ISOCode,
            countryCode,
            role,
            googleId,
            appleId,
            facebookId,
            twitterId,
            deviceType,
        } = createUserDto;

        return {
            firstName,
            lastName,
            fullName: fullName || `${firstName} ${lastName}`,
            authMethod,
            userName,
            email,
            phone,
            status,
            ISOCode,
            countryCode,
            role: role ?? (deviceType === 'web' ? 'admin' : 'user'),
            googleId,
            appleId,
            facebookId,
            twitterId,
        };
    }

    private checkIfCreatedByAdmin(role: string): boolean {
        return role === 'admin';
    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.remove(id);
    }
}
