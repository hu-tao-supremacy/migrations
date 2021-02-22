import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("event_location", (table) => {
    table.bigIncrements("id").primary();
    table.text("name").notNullable();
    table.double("latitude").notNullable();
    table.double("longtitude").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("event_location");
}
