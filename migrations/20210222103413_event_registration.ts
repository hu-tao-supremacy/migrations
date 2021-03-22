import * as Knex from "knex"

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("event_registration", (table) => {
    table.bigIncrements("id").primary()

    table.bigInteger("event_id").notNullable()
    table.foreign("event_id").references("event.id").onDelete("CASCADE")

    table.bigInteger("user_id").notNullable()
    table.foreign("user_id").references("user.id").onDelete("CASCADE")

    table.enum("status", ["PENDING", "APPROVED", "REJECTED"]).notNullable()

    table.unique(['event_id', 'user_id', 'status'])
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("event_registration")
}
