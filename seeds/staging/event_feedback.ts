import * as Knex from "knex"
import faker from "faker"

export async function seed(knex: Knex): Promise<void> {
  const data = new Array(200).fill(undefined).map((_) => {
    return {
      event_id: faker.random.number({ min: 1, max: 100 }),
      feedback: faker.lorem.paragraph(),
    }
  })
  await knex("event_feedback").insert(data)
}
