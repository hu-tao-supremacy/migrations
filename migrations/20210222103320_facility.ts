import * as Knex from "knex"

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("facility", (table) => {
    table.bigIncrements("id").primary()

    table.bigInteger("organization_id").notNullable()
    table
      .foreign("organization_id")
      .references("organization.id")
      .onDelete("CASCADE")

    table.text("name").notNullable()

    table.double("latitude").notNullable()

    table.double("longitude").notNullable()

    table.json("operating_hour").notNullable()

    table.text("description").notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("facility")
}
