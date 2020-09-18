import request from 'supertest'
import { app } from '../../app'


it('responds with the details of the current user', async () => {

  const token = await global.signin()

  const response = await request(app)
    .get('/api/users/currentuser')
    .set('Authorization', 'bearer ' + token)
    .send()
    .expect(200)
  
  expect(response.body.currentUser.email).toEqual("voicemotestd1@voicemod.com")

})

it('responds with null if not authorized', async () => {

  const response = await request(app)
    .get('/api/users/currentuser')
    .send()
    .expect(200)

  expect(response.body.currentUser).toEqual(null);

})