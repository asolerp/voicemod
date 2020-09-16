import request from 'supertest'
import { app } from '../../app'

import { voicemodTestUser } from '../../test/setup'


const newName = 'newName'

it('Update user with correrct data', async () => {

  // Create User
  await request(app)
    .post('/api/users/signup')
    .send(voicemodTestUser)
    .expect(201)

  // Login User
  const response = await request(app)
    .post('/api/users/signin')
    .send({
      email: voicemodTestUser.email,
      password: voicemodTestUser.password
    })
    expect(200)

  // Update User
   await request(app)
    .put('/api/users/updateuser')
    .set('Cookie', response.get('Set-Cookie'))
    .send({
      ...voicemodTestUser,
      name: newName
    })
    .expect(204);

  const userResonse = await request(app)
    .get(`/api/users/${response.body._id}`)
    .set('Cookie', response.get('Set-Cookie'))
    .send()
    .expect(200)

  expect(userResonse.body.name).toEqual(newName)
  
  
})

it('Returns 400 on bad request', async () => {

  // Create User
  await request(app)
    .post('/api/users/signup')
    .send(voicemodTestUser)
    .expect(201)

  // Login User
  const response = await request(app)
    .post('/api/users/signin')
    .send({
      email: voicemodTestUser.email,
      password: voicemodTestUser.password
    })
    expect(200)

  // Update User
  await request(app)
    .put('/api/users/updateuser')
    .set('Cookie', response.get('Set-Cookie'))
    .send({
      name: newName
    })
    .expect(400);
  
})
