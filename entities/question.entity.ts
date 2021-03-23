import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  questionGroupId: number;

  @Column()
  order: number;

  @Column("enum", { enum: ["SCALE", "TEXT"] })
  answerType: string;

  @Column({ default: false })
  isOptional: boolean;

  @Column()
  title: string;

  @Column()
  subtitle: string;
}
