import * as Knex from "knex";
import * as faker from "faker";

export async function seed(knex: Knex): Promise<void> {
  let set = new Set();
  while (set.size < 200) {
    set.add(faker.random.word());
  }

  let words = Array.from(set);
  const data = new Array(200).fill(undefined).map((_, index) => {
    return {
      name: words[index],
    };
  });

  // Inserts seed entries
  await knex("tag").insert(data);
}
