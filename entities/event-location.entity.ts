import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EventLocation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  eventId: number;

  @Column()
  locationId: number;
}
