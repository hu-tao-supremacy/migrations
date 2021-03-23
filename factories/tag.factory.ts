import { define } from "typeorm-seeding";
import { Tag } from "../entities/tag.entity";
import { wordGroup } from "./random";

define(Tag, (faker) => {
  const tag = new Tag();
  tag.name = wordGroup();
  return tag;
});
