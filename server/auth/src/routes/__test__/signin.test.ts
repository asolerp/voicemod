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

it('set cookie when login is successful', async ()=> {

  // Create User
  await request(app)
    .post('/api/users/signup')
    .send(testUserCorrect)
    .expect(201)

  // Login User
  const response = await request(app)
    .post('/api/users/signin')
    .send({
      email: testUserCorrect.email,
      password: testUserCorrect.password
    })
    expect(200)

  expect(response.get('Set-Cookie')).toBeDefined()

})

it('fails if email does not exists', async () => {
  await request(app)
  .post('/api/users/signin')
  .send({
    email: testUserCorrect.email,
    password: testUserCorrect.password
  })
  expect(400)
})

