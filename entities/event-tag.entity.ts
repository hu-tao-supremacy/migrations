import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class EventTag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  eventId: number;

  @Column()
  tagId: number;
}
