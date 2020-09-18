import request from 'supertest'
import { app } from '../../app'
import { User } from '../../models/user'
import { voicemodTestUser1, voicemodTestUser2 } from '../../test/setup'


it('Delete user succesfully', async () => {

  const token = await global.signin()

  await request(app)
    .delete(`/api/users/deleteUser`)
    .set('Authorization', 'bearer ' + token)
    .send()
    .expect(204)

})


it('Disallows delete user if not authorized', async () => {
  // CREATE USER 
  const user = User.build(voicemodTestUser1)
  await user.save()

  // DELETE USER
  await request(app)
    .delete(`/api/users/deleteUser`)
    .send()
    .expect(401)

})


