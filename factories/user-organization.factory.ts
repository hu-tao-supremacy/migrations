import { define, factory } from "typeorm-seeding";
import { Organization } from "../entities/organization.entity";
import { UserOrganization } from "../entities/user-organization.entity";
import { User } from "../entities/user.entity";

define(UserOrganization, (faker) => {
  const userOrg = new UserOrganization();
  userOrg.user = factory(User)() as any;
  userOrg.organization = factory(Organization) as any;
  return userOrg;
});
