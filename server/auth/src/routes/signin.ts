import { validateRequest } from '@aspvoicemod/common'
import express, { Request, Response } from 'express'
import { body } from 'express-validator'


const router = express.Router()
router.post('/api/users/signin',
[
  body("email").isEmail().withMessage('Email must be valid'),
  body('password').trim().isLength({min: 4, max: 20}).withMessage('Password must be between 4 and 20 characters')
], validateRequest, async (req: Request, res: Response) => {
  
  
})