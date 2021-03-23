import faker from "faker";
import friendlyWords from "friendly-words";
import toTitleCase from "to-title-case";

export function wordGroup(): string {
  return [friendlyWords.predicates, friendlyWords.objects, friendlyWords.teams]
    .map((list) => toTitleCase(faker.random.arrayElement(list)))
    .join(" ") as string;
}
