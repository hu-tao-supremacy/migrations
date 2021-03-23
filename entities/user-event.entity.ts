import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Event } from "./event.entity";
import { User } from "./user.entity";

@Entity()
export class UserEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @ManyToOne(() => User)
  user: User;

  @Column()
  eventId: number;

  @ManyToOne(() => Event)
  event: Event;

  @Column({ nullable: true })
  rating?: number;

  @Column()
  ticket: string;

  @Column("enum", { enum: ["PENDING", "APPROVED", "REJECT"] })
  status: string;
}
