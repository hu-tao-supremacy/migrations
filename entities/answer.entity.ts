import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userEventId: number;

  @Column()
  questionId: number;

  @Column()
  value: string;
}
