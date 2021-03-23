import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserInterest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  tagId: number;
}
