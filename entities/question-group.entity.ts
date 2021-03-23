import {
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Event } from "./event.entity";

@Index(["eventId", "type"], { unique: true })
@Index(["type", "order"], { unique: true })
@Entity()
export class QuestionGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  eventId: number;

  @ManyToOne(() => Event, { onDelete: "CASCADE" })
  event: Event;

  @Column("enum", { enum: ["PRE_EVENT", "POST_EVENT"] })
  type: string;

  @Column()
  order: number;

  @Column()
  title: string;
}
