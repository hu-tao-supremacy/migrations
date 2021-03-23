import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Event } from "./event.entity";

@Entity()
export class EventDuration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  eventId: number;

  @Column("timestamptz")
  start: string;

  @Column("timestamptz")
  finish: string;

  @ManyToOne(() => Event)
  event: Event;
}
