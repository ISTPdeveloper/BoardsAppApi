import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'boardsapp-nestjs.cxfnnebsa7m4.ap-northeast-2.rds.amazonaws.com',
  port: 3306,
  username: 'admin',
  password: '?',
  database: 'boardsapp_nestjs',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
