import { define } from "typeorm-seeding";
import { User } from "../entities/user.entity";

define(User, (faker) => {
  const isChulaStudent = faker.random.boolean();
  const user = new User();
  user.email = faker.internet.email();
  user.gender = faker.random.arrayElement(["M", "F", "NS"]);
  user.address = faker.address.streetAddress(true);
  user.chulaId = isChulaStudent
    ? faker.random.alphaNumeric(10).toUpperCase()
    : null;
  user.isChulaStudent = isChulaStudent;
  user.firstName = faker.name.firstName();
  user.lastName = faker.name.lastName();
  return user;
});
