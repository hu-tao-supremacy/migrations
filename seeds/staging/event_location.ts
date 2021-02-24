import * as Knex from "knex"
import * as faker from "faker"

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("event_organization").del()

  const data = new Array(200).fill(undefined).map((_) => {
    return {
      name: faker.address.state(),
      latitude: faker.address.latitude(),
      longitude: faker.address.longitude(),
    }
  })

  // Inserts seed entries
  await knex("event_location").insert(data)
}
