import express, { Request, Response } from 'express'
import {
  requireAuth,
  NotFoundError,
  NotAuthorizedError, currentUser
} from '@aspvoicemod/common'
import { User } from '../models/user'

const router = express.Router()


router.delete(
  '/api/users/deleteuser',
  currentUser,
  requireAuth,
  async( req: Request, res: Response) => {

    const user = await User.findById(req.currentUser!.id);

    if (!user) {
      throw new NotFoundError();
    }

    if (user.id !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    user.deleteOne()

    res.status(204).send()

  }
)

export { router as deleteUserRouter }