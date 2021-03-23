import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  eventId: number;

  @Column({ nullable: true })
  rating?: number;

  @Column()
  ticket: string;

  @Column("enum", { enum: ["PENDING", "APPROVED", "REJECT"] })
  status: string;
}
