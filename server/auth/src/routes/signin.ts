import { validateRequest, BadRequestError } from '@aspvoicemod/common'
import express, { Request, Response } from 'express'
import { body } from 'express-validator'
import jwt from 'jsonwebtoken'

import { Password } from '../services/password'
import { User } from '../models/user'


const router = express.Router()
router.post(
  '/api/users/signin',
  [
    body("email").isEmail().withMessage('Email must be valid'),
    body('password').trim().isLength({min: 4, max: 20}).withMessage('Password must be between 4 and 20 characters')
  ], 
  validateRequest, 
  async (req: Request, res: Response) => {
  
  const { email, password } = req.body

  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    throw new BadRequestError('Invalid credentials');
  }

  console.log("Compare", existingUser.password, password)

  const passwordsMatch = await Password.compare(
    existingUser.password,
    password
  );
  if (!passwordsMatch) {
    throw new BadRequestError('Invalid credentials')
  }

  // Generat JWT
  const userJwt = jwt.sign({
    id: existingUser._id,
    email: existingUser.email,
    name: existingUser.name
  }, process.env.JWT_KEY! )

  req.session = {
    jwt: userJwt
  }

  res.status(200).send({auth: true, token: userJwt, user: existingUser})
  
})


export { router as signInRouter }