import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'kakakokokiki',
  database: 'dbSkillTest',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default ormConfig;