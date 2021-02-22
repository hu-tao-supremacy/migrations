import * as Knex from "knex"

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("user_permission", (table) => {
    table.bigIncrements("id").primary()

    table.bigInteger("user_id").notNullable()
    table.foreign("user_id").references("user.id").onDelete("CASCADE")

    table.bigInteger("organization_permission_id").notNullable()
    table
      .foreign("organization_permission_id")
      .references("organization_permission.id")
      .onDelete("CASCADE")
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("user_permission")
}
