import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        UsersModule,
        TypeOrmModule.forRoot({
            type: 'mongodb',
            url: process.env.MONGODB_URI,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            useUnifiedTopology: true,
            synchronize: true,
        }),
        UsersModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
