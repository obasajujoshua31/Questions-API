import { Topic } from "./topic.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Option } from "./option.entity";

@Entity("questions")
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 400, nullable: true })
  question: string;

  @Column({ length: 400, nullable: true })
  source: string;

  @Column()
  topic_id: number;

  @ManyToOne(() => Topic, topic => topic.questions)
  @JoinColumn({
    name: "topic_id",
    referencedColumnName: "id",
  })
  topic: Topic;

  @OneToMany(() => Option, option => option.oneQuestion)
  @JoinColumn({
    name: "id",
    referencedColumnName: "question_id",
  })
  options: Option[];
}
