import * as Knex from "knex"

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("event_tag", (table) => {
    table.bigIncrements("id").primary()

    table.bigInteger("event_id").notNullable()
    table.foreign("event_id").references("event.id").onDelete("CASCADE")

    table.bigInteger("tag_id").notNullable()
    table.foreign("tag_id").references("tag.id").onDelete("CASCADE")
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("event_tag")
}
