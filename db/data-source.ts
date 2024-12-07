import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
  type: 'mssql',
  host: 'pnuwish.database.windows.net',
  port: 1433,
  username: '',
  password: '',
  database: 'pnu-wish-students',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  synchronize: true
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;