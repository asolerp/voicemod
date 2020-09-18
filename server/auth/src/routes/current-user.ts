import express, { Request, Response } from 'express'
import { currentUser } from '@aspvoicemod/common'
import { User } from '../models/user'

const router = express.Router()

router.get('/hola', (req: Request, res: Response) => {
  res.json({
    message: 'Hola desde el server!'
  });
})

router.get('/api/users/currentuser',currentUser,(req: Request, res: Response) => {
  res.status(200).send({ currentUser: req.currentUser || null })
})

export { router as currentUserRouter }