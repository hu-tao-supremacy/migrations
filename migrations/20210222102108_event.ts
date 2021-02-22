import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("event", (table) => {
    table.bigIncrements("id").primary();

    table.bigInteger("organization_id").notNullable();
    table
      .foreign("organization_id")
      .references("organization.id")
      .onDelete("CASCASE");

    table.bigInteger("event_location_id");
    table
      .foreign("event_location_id")
      .references("event_location.id")
      .onDelete("SET NULL");

    table.text("description").notNullable();
    table.text("name").notNullable();
    table.text("cover_image");
    table.text("cover_image_hash");
    table.text("poster_image");
    table.text("poster_image_hash");
    table.text("contact").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("event");
}
