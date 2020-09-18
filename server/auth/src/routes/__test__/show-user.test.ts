import request from 'supertest'
import { app } from '../../app'


it('Returns user if is authorized', async () => {

  const token = await global.signin()

  const response = await request(app)
    .get('/api/users/currentuser')
    .set('Authorization', 'bearer ' + token)
    .send()
    .expect(200)

  await request(app)
    .get(`/api/users/${response.body.currentUser.id}`)
    .set('Authorization', 'bearer ' + token)
    .send()
    .expect(200)
})

it('Fails if not authorized', async () => {
  const token = await global.signin()

  const response = await request(app)
    .get('/api/users/currentuser')
    .set('Authorization', 'bearer ' + token)
    .send()
    .expect(200)

  await request(app)
    .get(`/api/users/${response.body.currentUser.id}`)
    .send()
    .expect(401)
})

