import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';

export const userProviders = [
    {
        provide: 'User ',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
        inject: ['DATA_SOURCE'],
    },
];
