import request from 'supertest'
import { app } from '../../app'

const testUserCorrect = {
  email: "voicemod@voicemod.com",
  password: "voicemod",
  name: "voicemod",
  surname: "surname",
  country: "sp",
  phone: "600000000",
  postalCode:"07181"
}

const testUserWrong = {
  email: "voicemod.com",
  password: "voicemod",
  name: "voicemod",
}

it('Retuns 201 on successful signup', async () => {
  await request(app)
    .post('/api/users/signup')
    .send(testUserCorrect)
    .expect(201)
})

it('Returns 400 on bad request', async () => {
  await request(app)
    .post('/api/users/signup')
    .send(testUserWrong)
    .expect(400)
})

it('Disallows duplicated email', async () => {
  await request(app)
    .post('/api/users/signup')
    .send(testUserCorrect)
    .expect(201)
  await request(app)
    .post('/api/users/signup')
    .send(testUserCorrect)
    .expect(400)
})

it('Set cookie after successful signup', async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send(testUserCorrect)
    .expect(201)

  expect(response.get('Set-Cookie')).toBeDefined()

})
