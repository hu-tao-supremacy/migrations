import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Organization } from "./organization.entity";

@Entity()
export class Facility {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  organizationId: number;

  @ManyToOne(() => Organization)
  organization: Organization;

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
