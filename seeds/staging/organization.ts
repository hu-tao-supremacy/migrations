import * as Knex from "knex";
import * as faker from "faker";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("organization").del();

    const data = new Array(100).fill(undefined).map((_) => {
        return {
            name: faker.company.companyName(),
            is_verified: faker.random.boolean(),
        };
    });

    // Inserts seed entries
    await knex("organization").insert(data);
}
