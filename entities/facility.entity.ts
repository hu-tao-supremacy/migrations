import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Facility {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  organizationId: number;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column("json")
  operatingHours: string;

  @Column()
  description: string;
}
