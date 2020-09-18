import express, { Request, Response } from 'express'
import { currentUser, NotFoundError, NotAuthorizedError, requireAuth } from '@aspvoicemod/common'
import { User } from '../models/user'

const router = express.Router()

router.get('/api/users/:id', requireAuth, async (req: Request, res: Response) => {

  console.log("Holaaaaa")
  
  const user = await User.findById(req.params.id)

  console.log(user)

  if (!user) {
    throw new NotFoundError()
  }

  if (user.id !== req.currentUser!.id) {
    throw new NotAuthorizedError()
  }

  res.status(200).send(user)

})


export { router as showUserRouter }