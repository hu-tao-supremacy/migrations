import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
