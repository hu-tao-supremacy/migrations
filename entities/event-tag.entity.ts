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

  @OneToOne(() => Event)
  event: Event;

  @OneToOne(() => Tag)
  tag: Tag;
}
