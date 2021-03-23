import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { EventLocation } from "./event-location.entity";

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  organizationId: number;

  @Column({ nullable: true })
  eventLocationId?: number;

  @OneToOne(EventLocation)
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
