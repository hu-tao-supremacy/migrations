import * as Knex from "knex"
import * as faker from "faker"

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("user_organization").del()

  const a = new Array(100).fill(undefined).map((_, i) => {
    const index = i + 1
    return {
      user_id: index,
      organization_id: index,
    }
  })

  // @ts-ignore
  const b: { user_id: number; organization_id: number }[] = new Array(100)
    .fill(undefined)
    .map((_) => {
      const user = faker.random.number({ min: 1, max: 100 })
      const organization = faker.random.number({ min: 1, max: 100 })

      if (user !== organization) {
        return {
          user_id: user,
          organization_id: organization,
        }
      }

      return undefined
    })
    .filter((data) => data)

  const data = a.concat(b)

  // Inserts seed entries
  await knex("user_organization").insert(data)
}
