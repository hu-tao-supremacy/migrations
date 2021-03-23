import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  organizationId: number;

  @Column({ nullable: true })
  eventLocationId?: number;

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
