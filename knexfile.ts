// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: "localhost",
      database: "hts",
      user: "hu-tao-mains",
      password: "hu-tao-mains",
      port: 5432,
    },
    seeds: {
      directory: "./seeds/staging",
    },
  },
  staging: {
    client: "postgresql",
    connection: {
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      port: "5432",
    },
    seeds: {
      directory: "./seeds/staging",
    },
  },
};
