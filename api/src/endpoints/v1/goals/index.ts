import { Router } from 'express'
import goalsController from '../../../controllers/goals.controllers'
import goalsValidation from '../../../middlewares/goalValidation'

const goalsRouter = Router()

goalsRouter.route('/')
  .post(goalsValidation.goalValidator, goalsController.createGoal)
  .get(goalsController.getGoals)

goalsRouter.route('/:id')
  .all(goalsValidation.idValidator)
  .get(goalsController.getGoal)
  .delete(goalsController.deleteGoal)
  .put(goalsValidation.goalValidator, goalsController.updateGoal)

export default goalsRouter
