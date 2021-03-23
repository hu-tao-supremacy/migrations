import { define } from "typeorm-seeding";
import { Organization } from "../entities/organization.entity";

define(Organization, (faker) => {
  const org = new Organization();
  org.name = faker.company.companyName();
  org.isVerified = faker.random.boolean();
  org.abbreviation = faker.random.alphaNumeric(4);
  org.advisor = faker.name.firstName();
  org.associatedFaculty = faker.company.companyName();
  org.description = faker.lorem.paragraph();
  org.facebookPage = faker.random.alphaNumeric(6);
  org.instagram = faker.random.alphaNumeric(6);
  org.lineOfficialAccount = faker.random.alphaNumeric(6);
  org.email = faker.internet.email();
  org.contactFullName = faker.name.firstName();
  org.contactEmail = faker.internet.email();
  org.contactLineId = faker.random.alphaNumeric(6);
  return org;
});
