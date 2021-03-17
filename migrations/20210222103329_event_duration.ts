import * as Knex from "knex"

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("event_duration", (table) => {
    table.bigIncrements("id").primary()

    table.bigInteger("event_id").notNullable()
    table.foreign("event_id").references("event.id").onDelete("CASCADE")

    table.timestamp("start", { useTz: true }).notNullable()

    table.timestamp("finish", { useTz: true }).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("event_duration")
}
