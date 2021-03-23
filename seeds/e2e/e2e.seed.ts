import { Connection } from "typeorm";
import { Seeder, Factory } from "typeorm-seeding";
import { UserEvent } from "../../entities/user-event.entity";

export default class E2E implements Seeder {
  public async run(factory: Factory, connection: Connection) {
    await factory(UserEvent)().create();
  }
}
