import { IsString, IsEmail, IsOptional, IsEnum } from 'class-validator';

const authMethods = [
    'email',
    'google',
    'facebook',
    'apple',
    'github',
    'phone',
] as const;
type AuthMethod = (typeof authMethods)[number];

export class CreateUserDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsOptional()
    @IsString()
    fullName?: string;

    @IsString()
    @IsEnum(authMethods)
    authMethod: AuthMethod;

    @IsString()
    userName: string;

    @IsEmail()
    email: string;

    @IsString()
    phone: string;

    @IsOptional()
    @IsString()
    status?: string;

    @IsString()
    ISOCode: string;

    @IsString()
    countryCode: string;

    @IsOptional()
    @IsString()
    role?: string;

    @IsOptional()
    @IsString()
    googleId?: string;

    @IsOptional()
    @IsString()
    appleId?: string;

    @IsOptional()
    @IsString()
    facebookId?: string;

    @IsOptional()
    @IsString()
    twitterId?: string;

    @IsOptional()
    @IsString()
    password?: string;

    @IsOptional()
    @IsString()
    activationCode?: string;

    @IsOptional()
    @IsString()
    isEmailVerified?: boolean;

    @IsOptional()
    @IsString()
    isPhoneVerified?: boolean;

    @IsOptional()
    @IsString()
    deviceType?: string;
}
