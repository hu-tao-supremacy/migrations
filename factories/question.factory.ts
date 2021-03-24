import { define, factory } from "typeorm-seeding";
import { QuestionGroup } from "../entities/question-group.entity";
import { Question } from "../entities/question.entity";
import { wordGroup } from "./random";

define(Question, (faker) => {
  let question = new Question();
  question.title = `${wordGroup()}?`;
  question.subtitle = faker.lorem.sentence();
  question.answerType = faker.random.arrayElement(["SCALE", "TEXT"]);
  question.isOptional = faker.random.boolean();
  return question;
});
