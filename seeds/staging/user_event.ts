import * as Knex from "knex"
import faker from "faker"

export async function seed(knex: Knex): Promise<void> {
  const data = new Array(200).fill(undefined).map((_) => {
    return {
      user_id: faker.random.number({ min: 1, max: 100 }),
      event_id: faker.random.number({ min: 1, max: 200 }),
    }
  })
  await knex("user_event").insert(data)
}
