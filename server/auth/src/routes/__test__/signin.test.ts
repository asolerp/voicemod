import request from 'supertest'
import { app } from '../../app'

import { voicemodTestUser1 } from '../../test/setup'


it('set cookie when login is successful', async ()=> {

  // Create User
  await request(app)
    .post('/api/users/signup')
    .send(voicemodTestUser1)
    .expect(201)

  // Login User
  const response = await request(app)
    .post('/api/users/signin')
    .send({
      email: voicemodTestUser1.email,
      password: voicemodTestUser1.password
    })
    expect(200)

  expect(response.get('Set-Cookie')).toBeDefined()

})

it('fails if email does not exists', async () => {
  await request(app)
  .post('/api/users/signin')
  .send({
    email: voicemodTestUser1.email,
    password: voicemodTestUser1.password
  })
  expect(400)
})

