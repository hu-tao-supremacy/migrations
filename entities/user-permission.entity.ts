import {
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";

@Index(["userId", "permissionName"], { unique: true })
@Entity()
export class UserPermission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  user: User;

  @Column()
  permissionName: string;
}
