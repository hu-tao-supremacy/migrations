import { define, factory } from "typeorm-seeding";
import { Event } from "../entities/event.entity";
import { UserEvent } from "../entities/user-event.entity";
import { User } from "../entities/user.entity";

define(UserEvent, (faker) => {
  const isApproved = faker.random.boolean();
  const userEvent = new UserEvent();
  userEvent.event = factory(Event)() as any;
  userEvent.user = factory(User)() as any;
  userEvent.status = isApproved
    ? "APPROVED"
    : faker.random.arrayElement(["PENDING", "REJECTED"]);
  userEvent.ticket = isApproved ? faker.random.alphaNumeric(6).toUpperCase() : null;
  userEvent.rating = isApproved ? faker.random.number(5) : null;
  return userEvent;
});
