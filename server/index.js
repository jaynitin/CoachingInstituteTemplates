import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import leadsRouter from './routes/leads.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/leads', leadsRouter)

const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/coaching-institute')
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  .catch((err) => console.error('MongoDB connection error:', err))
