import { define, factory } from "typeorm-seeding";
import { Event } from "../entities/event.entity";
import { Organization } from "../entities/organization.entity";

define(Event, (faker) => {
  let event = new Event();
  event.name = faker.lorem.words(6);
  event.description = faker.lorem.paragraph();
  event.organization = factory(Organization)() as any;
  event.attendeeLimit = faker.random.number(50);
  return event;
});
