import { Connection } from "typeorm";
import { Seeder, Factory } from "typeorm-seeding";
import { EventTag } from "../../entities/event-tag.entity";
import { UserEvent } from "../../entities/user-event.entity";
import faker from "faker";
import { UserOrganization } from "../../entities/user-organization.entity";
import { EventDuration } from "../../entities/event-duration.entity";
import { QuestionGroup } from "../../entities/question-group.entity";
import { Event } from "../../entities/event.entity";
import _ from "lodash";
import { Question } from "../../entities/question.entity";

export default class E2E implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const userEventArray = await factory(UserEvent)().createMany(200);
    const userArray = userEventArray.map((userEvent) => userEvent.user);
    const eventArray = userEventArray.map((userEvent) => userEvent.event);
    const organizationArray = eventArray.map((event) => event.organization);
    const eventTagArray = await factory(EventTag)()
      .map(async (eventTag: EventTag) => {
        eventTag.event = faker.random.arrayElement(eventArray);
        return eventTag;
      })
      .createMany(50);
    const userOrganizationArray = await factory(UserOrganization)()
      .map(async (userOrg: UserOrganization) => {
        userOrg.user = faker.random.arrayElement(userArray);
        userOrg.organization = faker.random.arrayElement(organizationArray);
        return userOrg;
      })
      .createMany(50);
    const eventDurationArray = await factory(EventDuration)()
      .map(async (eventDuration: EventDuration) => {
        eventDuration.event = faker.random.arrayElement(eventArray);
        return eventDuration;
      })
      .createMany(50);

    {
      const questionGroupOptions: any = {};
      questionGroupOptions.n = 5;
      questionGroupOptions.idx = 0;

      const questionGroupMapping: { event: Event; order: number }[] = _.flatMap(
        eventArray.map((event) => {
          return _.range(1, questionGroupOptions.n + 1).map((n) => {
            return { event, order: n };
          });
        })
      );

      const questionGroupArray = await factory(QuestionGroup)()
        .map(async (group: QuestionGroup) => {
          group.event = questionGroupMapping[questionGroupOptions.idx].event;
          group.order = questionGroupMapping[questionGroupOptions.idx].order;
          group.type = "PRE_EVENT";
          questionGroupOptions.idx++;
          return group;
        })
        .createMany(eventArray.length * questionGroupOptions.n);

      const questionOptions: any = {};
      questionOptions.n = 3;
      questionOptions.idx = 0;

      const questionMapping: { groupId: number; order: number }[] = _.flatMap(
        questionGroupArray.map((group) => {
          return _.range(1, questionOptions.n + 1).map((n) => {
            return { groupId: group.id, order: n };
          });
        })
      );

      const questionArray = await factory(Question)()
        .map(async (question: Question) => {
          question.questionGroupId =
            questionMapping[questionOptions.idx].groupId;
          question.order = questionMapping[questionOptions.idx].order;
          questionOptions.idx++;
          return question;
        })
        .createMany(questionGroupArray.length * questionOptions.n);
    }
  }
}
