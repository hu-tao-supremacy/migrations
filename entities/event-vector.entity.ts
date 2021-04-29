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
export class EventVector {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    eventId: number;

    @OneToOne(() => Event, { onDelete: "CASCADE" })
    @JoinColumn()
    event: Event;

    @Column("float", { array: true })
    vector: number[];
}
