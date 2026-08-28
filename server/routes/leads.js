import { Router } from 'express'
import Lead from '../models/Lead.js'

const router = Router()

router.post('/', async (req, res) => {
  try {
    const { name, phone, course } = req.body
    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone are required' })
    }
    const lead = await Lead.create({
      name,
      phone,
      course,
      instituteName: process.env.INSTITUTE_NAME || 'Unknown Institute'
    })
    res.status(201).json(lead)
  } catch (err) {
    res.status(500).json({ error: 'Could not save lead' })
  }
})

router.get('/', async (req, res) => {
  const leads = await Lead.find({ instituteName: process.env.INSTITUTE_NAME }).sort({ createdAt: -1 })
  res.json(leads)
})

export default router
