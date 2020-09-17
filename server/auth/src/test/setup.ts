import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../app';

export const voicemodTestUser1 = {
  email: "voicemotestd1@voicemod.com",
  password: "voicemod",
  name: "voicemod",
  surname: "surname",
  country: "sp",
  phone: "600000000",
  postalCode:"07181"
}

export const voicemodTestUser2 = {
  email: "voicemotestd2@voicemod.com",
  password: "voicemod",
  name: "voicemod",
  surname: "surname",
  country: "sp",
  phone: "600000000",
  postalCode:"07181"
}

declare global {
  namespace NodeJS {
    interface Global {
      signin(): Promise<string[]>;
    }
  }
}

let mongo: any;
beforeAll(async () => {
  process.env.JWT_KEY = 'asdfasdf';
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  mongo = new MongoMemoryServer();
  const mongoUri = await mongo.getUri();

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});

global.signin = async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send({
      ...voicemodTestUser1
    })
    .expect(201);

  const cookie = response.get('Set-Cookie');

  return cookie;
};
