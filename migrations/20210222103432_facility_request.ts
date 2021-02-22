import * as Knex from "knex"

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("facility_request", (table) => {
    table.bigIncrements("id").primary()

    table.bigInteger("event_id").notNullable()
    table.foreign("event_id").references("event.id").onDelete("CASCADE")

    table.bigInteger("facility_id").notNullable()
    table.foreign("facility_id").references("facility.id").onDelete("CASCADE")

    table.enum("status", ["PENDING", "APPROVED", "REJECTED"]).notNullable()

    table.text("reject_reason")
    table.timestamp("start", { useTz: true }).notNullable()
    table.timestamp("end", { useTz: true }).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("facility_request")
}
