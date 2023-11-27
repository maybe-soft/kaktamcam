import { Container } from 'typedi';
import { DataSource } from 'typeorm';
import DeviceEntity from './entities/device.entity';

const AppDataSource = new DataSource({
  type: 'better-sqlite3',
  database: 'data.sqlite3',
  synchronize: true,
  logging: false,
  entities: [DeviceEntity],
  subscribers: [],
  migrations: [],
});

Container.set({ type: DataSource });

export default AppDataSource;
