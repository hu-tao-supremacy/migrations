import * as Knex from "knex"

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("organization_permission", (table) => {
    table.bigIncrements("id").primary()

    table.bigInteger("organization_id").notNullable()
    table
      .foreign("organization_id")
      .references("organization.id")
      .onDelete("CASCADE")

    table.text("permission").notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("organization_permission")
}
