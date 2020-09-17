import mongoose from 'mongoose'
import { app } from './app'


const port = 8081

const {
  MONGO_HOSTNAME,
  MONGO_DB,
  MONGO_PORT
} = process.env;

const dbConnectionURL = {
  'LOCALURL': `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`
};

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }
  if (!process.env.MONGO_HOSTNAME || !process.env.MONGO_DB || !process.env.MONGO_PORT) {
    throw new Error("MONGO envs must be definded");
  }

  try {
    await mongoose.connect(dbConnectionURL.LOCALURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
  } catch (err) {
    console.error(err)
  }

  app.listen(port, () => {
    console.log(`Auth server ready on port ${port}!! 🚀🚀`)
  })

}

start()

