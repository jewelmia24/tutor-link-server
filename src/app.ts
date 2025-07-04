/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Request, Response } from 'express'
import router from './app/routes/routes'
const app = express()

app.use(express.json())

app.use('/api/v1',router)

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running')
})

app.use((err: any, req: Request, res: Response, next: any) => {
  res.status(err.statusCode).send({
    success: false,
    status: err.statusCode || 500,
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  })
})


export default app
