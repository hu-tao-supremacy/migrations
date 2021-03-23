import { DateTime, Zone } from "luxon";
import { define, factory } from "typeorm-seeding";
import { EventDuration } from "../entities/event-duration.entity";
import { Event } from "../entities/event.entity";

define(EventDuration, (faker) => {
  const isStarted = faker.random.boolean();
  const now = DateTime.now().setZone("Asia/Bangkok");
  const duration = { hours: faker.random.number(5) };
  const factor = {
    months: faker.random.number(1),
    days: faker.random.number(14),
  };
  const start = isStarted ? now.minus(factor) : now.plus(factor);
  const finish = start.plus(duration);
  const eventDuration = new EventDuration();
  eventDuration.event = factory(Event)() as any;
  eventDuration.start = start.toISO();
  eventDuration.finish = finish.toISO();
  return eventDuration;
});
