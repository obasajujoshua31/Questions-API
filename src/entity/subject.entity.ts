import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Topic } from "./topic.entity";

@Entity("subjects")
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Topic, topic => topic.subject)
  @JoinColumn({
    name: "id",
    referencedColumnName: "subject_id",
  })
  topics: Topic[];
}
