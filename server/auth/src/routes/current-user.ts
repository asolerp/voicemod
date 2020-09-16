import express, { Request, Response } from 'express'
import { currentUser } from '@aspvoicemod/common'
import { User } from '../models/user'

const router = express.Router()


router.get('/api/users/currentuser',currentUser,(req: Request, res: Response) => {

  // const user = User.findById(req.currentUser!.id)

  res.status(200).send({ currentUser: req.currentUser || null })
})

export { router as currentUserRouter }