import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class QuestionGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  eventId: number;

  @Column("enum", { enum: ["PRE_EVENT", "POST_EVENT"] })
  type: string;

  @Column()
  order: number;

  @Column()
  title: string;
}
