import mongoose from 'mongoose'

const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    course: { type: String, default: '' },
    // Which institute this lead came from — useful once you're
    // running the same codebase for several clients on one DB.
    instituteName: { type: String, required: true }
  },
  { timestamps: true }
)

export default mongoose.model('Lead', leadSchema)
