import { define, factory } from "typeorm-seeding";
import { QuestionGroup } from "../entities/question-group.entity";
import { wordGroup } from "./random";
import { Event } from "../entities/event.entity";
define(QuestionGroup, (faker) => {
  let questionGroup = new QuestionGroup();
  questionGroup.questionType = faker.random.arrayElement(["PRE_EVENT", "POST_EVENT"]);
  questionGroup.title = wordGroup();
  questionGroup.event = factory(Event)() as any;
  return questionGroup;
});
