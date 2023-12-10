import { Router } from 'express'
import goalsController from '../../../controllers/goals.controllers'

const goalsRouter = Router()

goalsRouter.post('/', goalsController.createGoal)
goalsRouter.delete('/:id', goalsController.deleteGoal)
goalsRouter.get('/', goalsController.getGoals)
goalsRouter.get('/:id', goalsController.getGoal)
goalsRouter.put('/:id', goalsController.updateGoal)

export default goalsRouter
