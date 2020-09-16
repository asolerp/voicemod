import express, { Request, Response } from 'express'
import {
  requireAuth,
  NotFoundError,
  NotAuthorizedError, currentUser
} from '@aspvoicemod/common'

const router = express.Router()


router.delete(
  '/api/users/deleteUser',
  requireAuth,
  currentUser,
  async( req: Request, res: Response) => {

  }
)