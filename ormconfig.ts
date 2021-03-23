import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export default {
  type: "postgres",
  host: "localhost",
  database: "hts",
  username: "hu-tao-mains",
  password: "hu-tao-mains",
  port: "5432",
  entities: ["entities/*.ts"],
  namingStrategy: new SnakeNamingStrategy(),
};
