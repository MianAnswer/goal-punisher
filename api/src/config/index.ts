import dotenv from 'dotenv'

const environment = process.env.NODE_ENV

if (environment !== 'production') {
  dotenv.config({ path: `${__dirname}/../../.env` })
}

const developmentConfig = {
  db: {
    uri: process.env.DB_URI || '',
  },
  server: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8000,
  },
}

const productionConfig = {
  db: {
    uri: process.env.DB_URI || '',
  },
  server: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8000,
  },
}

const config = (environment === 'production') ? productionConfig : developmentConfig

export default config
