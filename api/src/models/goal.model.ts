import mongoose from 'mongoose'
import IGoal from './goal'

const currentDate = new Date()

const GoalSchema = new mongoose.Schema<IGoal>({
  createdBy: {
    type: Date,
    default: currentDate,
    immutable: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  updatedBy: {
    type: Date,
  },
})

export default mongoose.model('Goal', GoalSchema, 'goals')
