import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("organization", (table) => {
    table.bigIncrements("id").primary();
    table.text("name").notNullable();
    table.boolean("is_verified").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("organization");
}
