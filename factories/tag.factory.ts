import { define } from "typeorm-seeding";
import { Tag } from "../entities/tag.entity";

define(Tag, (faker) => {
  const tag = new Tag();
  tag.name = faker.lorem.word(1);
  return tag;
});
