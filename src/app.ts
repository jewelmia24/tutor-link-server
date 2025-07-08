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

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    status: 404,
    message: `api not found at ${req.originalUrl}`,
  });
});

app.use((err: any, req: Request, res: Response, next: any) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).send({
    success: false,
    status: statusCode,
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
});



export default app
