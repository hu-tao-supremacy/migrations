import { define, factory } from "typeorm-seeding";
import { EventTag } from "../entities/event-tag.entity";
import { Event } from "../entities/event.entity";
import { Tag } from "../entities/tag.entity";

define(EventTag, (faker) => {
  const eventTag = new EventTag();
  eventTag.tag = factory(Tag)() as any;
  eventTag.event = factory(Event)() as any;
  return eventTag;
});
