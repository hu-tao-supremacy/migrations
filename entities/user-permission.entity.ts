import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {User} from "./user.entity";

@Entity()
export class UserPermission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @ManyToOne(() => User)
  user: User;

  @Column()
  permissionName: string;
}
