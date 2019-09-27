import {
  Entity,
  Column,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Question } from "./question.entity";

@Entity("options")
export class Option {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  option: string;

  @Column()
  correct: boolean;

  @Column()
  question_id: number;

  @ManyToOne(() => Question, question => question.options)
  @JoinColumn({
    name: "question_id",
    referencedColumnName: "id",
  })
  oneQuestion: Question;
}
