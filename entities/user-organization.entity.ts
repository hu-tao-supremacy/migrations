import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Organization } from "./organization.entity";
import { User } from "./user.entity";

@Entity()
export class UserOrganization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @ManyToOne(() => User)
  user: User;

  @Column()
  organizationId: number;

  @ManyToOne(() => Organization)
  organization: Organization;
}
