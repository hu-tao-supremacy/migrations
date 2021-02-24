import * as Knex from "knex"
import * as faker from "faker"

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("event").del()

  const data = new Array(200).fill(undefined).map((_) => {
    return {
      organization_id: faker.random.number({ min: 1, max: 100 }),
      event_location_id: faker.random.number({ min: 1, max: 200 }),
      description: faker.lorem.paragraph(),
      name: faker.lorem.sentence(),
      contact: faker.lorem.text(),
    }
  })

  // Inserts seed entries
  await knex("event").insert(data)
}
