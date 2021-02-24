import * as Knex from "knex";
import * as cleaner from "knex-cleaner";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries

    // @ts-ignore
    await cleaner.clean(knex, {
        mode: "truncate",
        restartIdentity: true,
    });
}