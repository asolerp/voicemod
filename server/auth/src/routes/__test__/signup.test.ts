import request from 'supertest'
import { app } from '../../app'

it('Retuns 201 on successful signup', async () => {
  await request(app)
          .post('/api/users/signup')
          .send({
            email: "voicemod@voicemod.com",
            password: "voicemod",
            name: "voicemod",
            surname: "surname",
            country: "sp",
            phone: "600000000",
            postalCode:"07181"
          })
          .expect(201)
})

it('Returns 400 on bad request', async () => {
  await request(app)
  .post('/api/users/signup')
  .send({
    email: "voicemod.com",
    password: "voicemod",
    name: "voicemod",
  })
  .expect(400)
})

it('Disallows duplicated email', async () => {
  await request(app)
          .post('/api/users/signup')
          .send({
            email: "voicemod@voicemod.com",
            password: "voicemod",
            name: "voicemod",
            surname: "surname",
            country: "sp",
            phone: "600000000",
            postalCode:"07181"
          })
          .expect(201)
  await request(app)
  .post('/api/users/signup')
  .send({
    email: "voicemod@voicemod.com",
    password: "voicemod",
    name: "voicemod",
    surname: "surname",
    country: "sp",
    phone: "600000000",
    postalCode:"07181"
  })
  .expect(400)
})

it('Set cookie after successful signup', async () => {
  const response =  await request(app)
  .post('/api/users/signup')
  .send({
    email: "voicemod@voicemod.com",
    password: "voicemod",
    name: "voicemod",
    surname: "surname",
    country: "sp",
    phone: "600000000",
    postalCode:"07181"
  })
  .expect(201)

  expect(response.get('Set-Cookie')).toBeDefined()

})
