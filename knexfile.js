// Update with your config settings.

require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      charset: "utf8"
    },
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds/dev"
    },
    useNullAsDefault: true
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./database/migration"
    },
    seeds: {
      directory: "./database/seed"
    }
  },

  testing: {
    client: "pg",
    connection: `postgres://localhost/${process.env.PORT}`,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    },
    useNullAsDefault: true
  }
};
