import { define } from 'typeorm-seeding'
import { UserPermission } from '../entities/user-permission.entity'

define(UserPermission, (faker) => {
  const userPermission = new UserPermission()
  return userPermission;
})
