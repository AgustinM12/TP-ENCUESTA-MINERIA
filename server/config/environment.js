import 'dotenv/config'

export const environment = {
  PORT: process.env.PORT || 5000,
  SECRET: process.env.SECRET || '123456789',
  DB: {
    DB_NAME: process.env.DB_NAME || 'encuesta',
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_DIALECT: process.env.DB_DIALECT || 'postgres',
    DB_USER: process.env.DB_USER || 'postgres',
    DB_PASSWORD: process.env.DB_PASSWORD || '123456',
    DB_PORT: process.env.DB_PORT || 5432
  }
};