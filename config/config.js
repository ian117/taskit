const dotenv = require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABSE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    define: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
    loggin: true
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABSE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    define: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
    loggin: true
  },
  production: {
   use_env_variable:'DATABASE_URL',
    define: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
    loggin: false,
    dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false
      }
  },
  }
}
