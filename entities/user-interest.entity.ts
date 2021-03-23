import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "./tag.entity";
import { User } from "./user.entity";

@Entity()
export class UserInterest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @ManyToOne(() => User)
  user: User;

  @Column()
  tagId: number;

  @ManyToOne(() => Tag)
  tag: Tag;
}
