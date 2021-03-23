import { define } from 'typeorm-seeding'
import { Location } from '../entities/location.entity'

define(Location, (faker) => {
  const loc = new Location()
  loc.name = faker.address.city();
  loc.googleMapUrl = faker.random.alphaNumeric(6);
  return loc
})
