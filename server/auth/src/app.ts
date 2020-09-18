
import express from 'express'
import 'express-async-errors'
import { json } from 'body-parser'
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

app.set('trust proxy', true)

app.use(json())

app.use(cors())
app.options('*', cors())

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