import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Organization } from "./organization.entity";

@Entity()
export class Facility {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  organizationId: number;

  @ManyToOne(() => Organization, { onDelete: "CASCADE" })
  organization: Organization;

  @Column({ unique: true })
  name: string;

  @Column("double precision")
  latitude: number;

  @Column("double precision")
  longitude: number;

  @Column("json")
  operatingHours: string;

  @Column()
  description: string;
}
