import { Router } from 'express'
import {
  createGoal,
  deleteGoal,
  getGoal,
  getGoals,
  updateGoal,
} from '../../../middlewares/goals.middeware'

const goalsRouter = Router()

goalsRouter.post('/', createGoal)
goalsRouter.delete('/:id', deleteGoal)
goalsRouter.get('/', getGoals)
goalsRouter.get('/:id', getGoal)
goalsRouter.put('/:id', updateGoal)

export default goalsRouter
