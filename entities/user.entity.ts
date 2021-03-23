import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  nickname?: string;

  @Column({ nullable: true })
  chulaId?: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ nullable: true })
  profilePictureUrl?: string;

  @Column()
  isChulaStudent: boolean;

  @Column("enum", { enum: ["M", "F", "NS"] })
  gender: string;
}
