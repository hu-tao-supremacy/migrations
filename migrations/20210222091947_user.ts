import * as Knex from "knex"

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("user", (table) => {
    table.bigIncrements("id").primary()
    table.text("first_name").notNullable()
    table.text("last_name").notNullable()
    table.text("email").notNullable().unique()
    table.text("nickname")
    table.text("chula_id")
    table.text("address")
    table.text("profile_picture")
    table.boolean("is_chula_student").notNullable()
    table.enum("gender", ["M", "F", "NS"]).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("user")
}
