import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Facility } from "./facility.entity";

@Entity()
export class FacilityRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  eventId: number;

  @ManyToOne(() => Event)
  event: Event;

  @Column()
  facilityId: number;

  @ManyToOne(() => Facility)
  facility: Facility;

  @Column("enum", { enum: ["PENDING", "APPROVED", "REJECTED"] })
  status: string;

  @Column({ nullable: true })
  rejectReason?: string;

  @Column("timestamptz", { nullable: true })
  start: string;

  @Column("timestamptz", { nullable: true })
  finish: string;
}