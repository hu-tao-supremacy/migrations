import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "./tag.entity";

@Entity()
export class EventTag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  eventId: number;

  @Column()
  tagId: number;

  @ManyToOne(() => Event)
  event: Event;

  @ManyToOne(() => Tag)
  tag: Tag;
}
