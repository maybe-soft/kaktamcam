import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('devices')
export default class DeviceEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column({ nullable: true })
  public description: string | null;

  @Column()
  public ip: string;

  @Column()
  public port: number;

  @Column()
  public username: string;

  @Column()
  public password: string;
}
