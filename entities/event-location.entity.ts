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

  @ManyToOne(() => Event)
  event: Event;

  @ManyToOne(() => Location, { onDelete: "CASCADE" })
  location: Location;
}
