import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FacilityRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  eventId: number;

  @Column()
  facilityId: number;

  @Column("enum", { enum: ["PENDING", "APPROVED", "REJECTED"] })
  status: string;

  @Column({ nullable: true })
  rejectReason?: string;

  @Column("timestamptz", { nullable: true })
  start: string;

  @Column("timestamptz", { nullable: true })
  finish: string;
}
