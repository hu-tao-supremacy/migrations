import * as Knex from "knex"
import * as faker from "faker"

export async function seed(knex: Knex): Promise<void> {
  const data = new Array(200).fill(undefined).map((_) => {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    const d = faker.random.arrayElements(days)
    const a = d.map((day) => {
      return {
        day,
        start: "8.00",
        finish: "16.30",
      }
    })

    return {
      organization_id: faker.random.number({ min: 1, max: 100 }),
      name: faker.company.companyName(),
      latitude: faker.address.latitude(),
      longitude: faker.address.longitude(),
      operating_hours: JSON.stringify(a),
      description: faker.lorem.paragraph(),
    }
  })

  // Inserts seed entries
  await knex("facility").insert(data)
}
