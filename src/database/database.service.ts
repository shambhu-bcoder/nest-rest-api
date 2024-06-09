import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
  onModuleInit() {
    throw new Error('Method not implemented.');
  }
  async connect() {
    await this.$connect();
  }
}
