import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
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

  @OneToMany(() => Event, (event) => event.eventLocation)
  event: Event;

  @ManyToOne(() => Location)
  location: Location;
}
