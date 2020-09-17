
import express from 'express'
import 'express-async-errors'
import { json } from 'body-parser'
import cookieSession from 'cookie-session'
import { errorHandler, NotFoundError } from '@aspvoicemod/common'
import cors from 'cors'



//Routes
import { signUpRouter } from './routes/signup' 
import { currentUserRouter } from './routes/current-user'
import { signInRouter } from './routes/signin'
import { updateUserRouter } from './routes/update-user'
import { showUserRouter } from './routes/show-user'
import { deleteUserRouter } from './routes/delete-user'

const app = express()

const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: 'http://localhost:8080',
  preflightContinue: false,
};

app.set('trust proxy', true)

app.use(json())
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
  })
  )

app.use(cors(options))

app.use(signUpRouter)
app.use(signInRouter)
app.use(currentUserRouter)
app.use(updateUserRouter)
app.use(showUserRouter)
app.use(deleteUserRouter)
  
  
app.all('*', async(req, res) => {
  throw new NotFoundError()
})

app.use(errorHandler)

export { app }