import { Question } from "./question.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Subject } from "./subject.entity";

@Entity("topics")
export class Topic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  subject_id: number;

  @ManyToOne(() => Subject, subject => subject.topics)
  @JoinColumn({
    name: "subject_id",
    referencedColumnName: "id",
  })
  subject: Subject;

  @OneToMany(() => Question, question => question.topic)
  @JoinColumn({
    name: "topic_id",
    referencedColumnName: "id",
  })
  questions: Question[];
}
