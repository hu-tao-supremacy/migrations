import {
  Column,
  Entity,
  Index,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Event } from "./event.entity";
import { Question } from "./question.entity";

@Index(["eventId", "type", "order"], { unique: true })
@Entity()
export class QuestionGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  eventId: number;

  @ManyToOne(() => Event, { onDelete: "CASCADE" })
  event: Event;

  @Column("enum", { enum: ["PRE_EVENT", "POST_EVENT"] })
  questionType: string;

  @Column()
  order: number;

  @Column()
  title: string;

  @OneToMany(() => Question, (question) => question.questionGroup)
  questions: Question[];
}
