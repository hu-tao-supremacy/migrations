import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserPermission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  permissionName: string;
}
