import {
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { QuestionGroup } from "./question-group.entity";

@Index(["questionGroupId", "order"], { unique: true })
@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  questionGroupId: number;

  @ManyToOne(() => QuestionGroup, { onDelete: "CASCADE" })
  questionGroup: QuestionGroup;

  @Column()
  order: number;

  @Column("enum", { enum: ["SCALE", "TEXT"] })
  answerType: string;

  @Column({ default: false })
  optional: boolean;

  @Column()
  title: string;

  @Column()
  subtitle: string;
}
