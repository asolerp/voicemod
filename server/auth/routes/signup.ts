import { validateRequest } from '@aspvoicemod/common'
import express, { Request, Response } from 'express'
import { body } from 'express-validator'
import jwt from 'jsonwebtoken'

// USER MODEL
import { User } from '../models/user'


const router = express.Router()

router.post('/api/users/signup', 
[
  body('email').isEmail().withMessage('Email must be valid'),
  body('password').trim().isLength({min: 4, max: 20}).withMessage('Password must be between 4 and 20 characters'),
  body('name').isString().withMessage('Name must be valid string'),
  body('surname').isString().withMessage('Surname must be valid string'),
  body('country').isString().withMessage('Country must be valid string'),
  body('phone').isString().withMessage('Phone must be valid string'),
  body('postalCode').isString().withMessage('PostalCode must be valid string'),
], validateRequest, async (req: Request, res: Response) => {

  const { email, password, name, surname, country, phone, postalCode } = req.body

})