import express from 'express'
import 'express-async-errors'
import { json } from 'body-parser'
import cookieSession from 'cookie-session'
import { errorHandler, NotFoundError } from '@aspvoicemod/common'

//Routes
import { signUpRouter } from './routes/signup' 

const app = express()

app.set('trust proxy', true)
app.use(json())
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
  })
)

app.use(signUpRouter)

app.all('*', async(req, res) => {
  throw new NotFoundError()
})

app.use(errorHandler)

export { app }