import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserOrganization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  organizationId: number;
}
