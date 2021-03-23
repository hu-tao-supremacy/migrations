import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Event } from "./event.entity";
import { Location } from "./location.entity";

@Entity()
export class EventLocation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  eventId: number;

  @Column()
  locationId: number;

  @OneToOne(() => Event)
  event: Event;

  @OneToOne(() => Location)
  location: Location;
}
