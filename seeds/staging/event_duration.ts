import * as Knex from "knex"
import * as faker from "faker"

export async function seed(knex: Knex): Promise<void> {
  const randomDate = (start: Date, end: Date) => {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    )
  }

  const date1 = randomDate(new Date(2020, 1, 1), new Date(2025, 12, 1))
  const date2 = date1.setDate(
    date1.getDate() + faker.random.number({ min: 100, max: 10000 })
  )

  const data = new Array(200).fill(undefined).map((_) => {
    return {
      event_id: faker.random.number({ min: 1, max: 200 }),
      start: date1,
      end: date2,
    }
  })
  await knex("event_duration").insert(data)
}
