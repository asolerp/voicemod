import express, { Request, Response } from 'express'
import {
  requireAuth,
  NotFoundError,
  NotAuthorizedError, currentUser
} from '@aspvoicemod/common'
import { User } from '../models/user'

const router = express.Router()


router.delete(
  '/api/users/deleteUser',
  currentUser,
  requireAuth,
  async( req: Request, res: Response) => {

    console.log(req.currentUser)

    const user = await User.findByIdAndDelete(req.currentUser!.id);

    if (!user) {
      throw new NotFoundError();
    }
    if (user.id !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    res.status(200).send()

  }
)