import * as Knex from "knex";
import * as faker from "faker";
import { DateTime } from "luxon";

export async function seed(knex: Knex): Promise<void> {
  const data = new Array(500).fill(undefined).map((_) => {
    let now = DateTime.now().setZone("Asia/Bangkok");
    let isPast = faker.random.boolean();
    let start = isPast ? now.minus({ months: 5 }) : now.plus({ months: 1 });
    let finish = start.plus({ hours: faker.random.number({ min: 1, max: 3 }) });
    return {
      event_id: faker.random.number({ min: 1, max: 200 }),
      start: start.toISO(),
      finish: finish.toISO(),
    };
  });
  await knex("event_duration").insert(data);
}
