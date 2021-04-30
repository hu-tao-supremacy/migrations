import {
    Column,
    Entity,
    Index,
    OneToOne,
    PrimaryGeneratedColumn,
    JoinColumn
} from "typeorm";
import { Event } from "./event.entity";

@Index(["eventId"], { unique: true })
@Entity()
export class EventRecommendation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    eventId: number;

    @OneToOne(() => Event, { onDelete: "CASCADE" })
    @JoinColumn()
    event: Event;

    @Column("float", { array: true })
    event_vector: number[];

    @Column("json", { nullable: true })
    score: string;
}
