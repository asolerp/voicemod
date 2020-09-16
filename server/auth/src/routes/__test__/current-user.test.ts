import request from 'supertest'
import { app } from '../../app'


it('responds with the details of the current user', async () => {

  const cookie = await global.signin()

  const response = await request(app)
    .get('/api/users/currentuser')
    .set('Cookie', cookie)
    .send()
    .expect(200)
  
  console.log("Response", response.body)

  expect(response.body.currentUser.email).toEqual("voicemotestd@voicemod.com")

})

it('responds with null if not authorized', async () => {

  const response = await request(app)
    .get('/api/users/currentuser')
    .send()
    .expect(200)

  expect(response.body.currentUser).toEqual(null);

})