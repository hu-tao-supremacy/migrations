import { define, factory } from "typeorm-seeding";
import { Event } from "../entities/event.entity";
import { Organization } from "../entities/organization.entity";
import { Location } from "../entities/location.entity";

define(Event, (faker) => {
  const hasLocation = faker.random.boolean();
  let event = new Event();
  event.name = faker.lorem.words(6);
  event.description = faker.lorem.paragraph();
  event.organization = factory(Organization)() as any;
  event.location = hasLocation ? (factory(Location)() as any) : null;
  event.attendeeLimit = faker.random.number(50);
  return event;
});
