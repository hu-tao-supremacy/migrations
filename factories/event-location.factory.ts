import { define, factory } from "typeorm-seeding";
import { Event } from "../entities/event.entity";
import { EventLocation } from "../entities/event-location.entity";
import { Location } from "../entities/location.entity";

define(EventLocation, (faker) => {
  const eventLocation = new EventLocation();
  eventLocation.event = factory(Event)() as any;
  eventLocation.location = factory(Location)() as any;
  return eventLocation;
});
