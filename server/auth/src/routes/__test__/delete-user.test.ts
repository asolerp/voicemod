import request from 'supertest'
import { app } from '../../app'


it('Delete user succesfully', async () => {

  const cookie = await global.signin()

  await request(app)
    .delete(`/api/users/deleteUser`)
    .set('Cookie', cookie)
    .send()
    .expect(204)

})


