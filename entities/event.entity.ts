import {
  Column,
  Entity,
  Index,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { EventLocation } from "./event-location.entity";
import { Organization } from "./organization.entity";

@Index(["organizationId", "name"], { unique: true })
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  organizationId: number;

  @ManyToOne(() => Organization, { onDelete: "CASCADE" })
  organization: Organization;

  @Column({ nullable: true })
  eventLocationId?: number;

  @OneToMany(() => EventLocation, (eventLocation) => eventLocation.event)
  eventLocation?: EventLocation;

  @Column()
  description: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  coverImageUrl?: string;

  @Column({ nullable: true })
  coverImageHash?: string;

  @Column({ nullable: true })
  posterImageUrl?: string;

  @Column({ nullable: true })
  profileImageUrl?: string;

  @Column({ nullable: true })
  profileImageHash?: string;

  @Column()
  attendeeLimit: number;
}
