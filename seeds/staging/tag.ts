import * as Knex from "knex";
import * as faker from "faker";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    const data = new Array(200).fill(undefined).map((_) => {
        return {
            name: faker.internet.userName(),
        };
    });

    // Inserts seed entries
    await knex("tag").insert(data);
}
