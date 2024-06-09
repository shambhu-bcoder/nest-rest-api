import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthsModule } from './auths/auths.module';
import { DatabaseModule } from './database/database.module';
import { AuthsModule } from './auths/auths.module';

@Module({
  imports: [AuthsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
