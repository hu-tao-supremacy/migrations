import * as Knex from "knex"
import * as faker from "faker"

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("user").del()

  const data = new Array(100).fill(undefined).map((_) => {
    const isStudent = faker.random.boolean()
    return {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      email: faker.internet.email(),
      nickname: faker.random.boolean() ? faker.name.firstName() : null,
      chula_id: isStudent ? faker.random.number(9999999999) : null,
      is_chula_student: isStudent,
      gender: faker.random.arrayElement(["M", "F", "NS"]),
    }
  })

  // Inserts seed entries
  await knex("user").insert(data)
}
