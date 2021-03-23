import {
  Column,
  Entity,
  Index,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Event } from "./event.entity";
import { Location } from "./location.entity";

@Index(["eventId", "locationId"], { unique: true })
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

  @ManyToOne(() => Location)
  location: Location;
}
