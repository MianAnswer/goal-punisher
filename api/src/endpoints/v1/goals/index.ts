import { Router } from 'express'
import goalsController from '../../../controllers/goals.controllers'
import goalsValidation from '../../../middlewares/goalValidation'

const goalsRouter = Router()

goalsRouter.post('/', goalsValidation.goalValidator, goalsController.createGoal)
goalsRouter.delete('/:id', goalsController.deleteGoal)
goalsRouter.get('/', goalsController.getGoals)
goalsRouter.get('/:id', goalsController.getGoal)
goalsRouter.put('/:id', goalsValidation.goalValidator, goalsValidation.goalValidator, goalsController.updateGoal)

export default goalsRouter
