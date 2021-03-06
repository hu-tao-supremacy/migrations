import {
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Event } from "./event.entity";
import { User } from "./user.entity";

@Index(["userId", "eventId"], { unique: true })
@Index(["eventId", "ticket"], { unique: true })
@Entity()
export class UserEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  user: User;

  @Column()
  eventId: number;

  @ManyToOne(() => Event, { onDelete: "CASCADE" })
  event: Event;

  @Column({ nullable: true })
  rating?: number;

  @Column({ nullable: true })
  ticket?: string;

  @Column({ nullable: false, default: false })
  isInternal: boolean = false;

  @Column("enum", {
    enum: ["__RESERVED__", "PENDING", "APPROVED", "REJECTED", "ATTENDED"],
  })
  status: string;
}
