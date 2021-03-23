import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { QuestionGroup } from "./question-group.entity";

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  questionGroupId: number;

  @ManyToOne(() => QuestionGroup)
  questionGroup: QuestionGroup;

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
