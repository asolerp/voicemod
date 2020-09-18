import express, { Request, Response } from 'express'
import { validateRequest, NotAuthorizedError, NotFoundError, currentUser, requireAuth } from '@aspvoicemod/common'
import { User } from '../models/user'
import { body } from 'express-validator'
import { Password } from '../services/password'


const router = express.Router()


router.put(
  '/api/users/updateuser', 
  currentUser, 
  requireAuth, 
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').isEmpty(),
    body('name').isString().withMessage('Name must be valid string'),
    body('surname').isString().withMessage('Surname must be valid string'),
    body('country').isString().withMessage('Country must be valid string'),
    body('phone').isString().withMessage('Phone must be valid string'),
    body('postalCode').isString().withMessage('PostalCode must be valid string'),
  ], 
  validateRequest, 
  async (req: Request, res: Response) => {

  const user = await User.findByIdAndUpdate(req.currentUser!.id, {...req.body}, {new: true})
  console.log(user)

  if (!user) {
    throw new NotFoundError()
  }

  if (user.id !== req.currentUser!.id) {
    throw new NotAuthorizedError()
  }

  res.status(200).send({auth: true, user: user})
 
})

router.put(
  '/api/users/updatepassword',
  currentUser,
  requireAuth,
  [
    body('password').trim().isLength({min: 4, max: 20}).withMessage('Password must be between 4 and 20 characters'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {

    const user = await User.findById(req.currentUser?.id)

    if (!user) {
      throw new NotFoundError()
    }
  
    if (user.id !== req.currentUser!.id) {
      throw new NotAuthorizedError()
    }

    console.log("Password", req.body.password)
    user.password = await Password.toHash(req.body.password)

    await user.save()

    res.status(200).send({auth: true, user: user})

  }
)

export { router as updateUserRouter }

