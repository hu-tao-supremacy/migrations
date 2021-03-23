import { Connection } from "typeorm";
import { Seeder, Factory } from "typeorm-seeding";
import { EventTag } from "../../entities/event-tag.entity";
import { UserEvent } from "../../entities/user-event.entity";
import faker from "faker";
import { UserOrganization } from "../../entities/user-organization.entity";

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
  }
}
