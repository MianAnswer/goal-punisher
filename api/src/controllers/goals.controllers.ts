import { Request, Response } from 'express'
import goalsService from '../services/goals.service'
import IGoal from '../models/goal'

const createGoal = async (req: Request, res: Response) => {
  const { body } = req
  const currentDate = new Date()
  const goal: IGoal = {
    createdBy: currentDate,
    completed: false,
    description: body.description,
    dueDate: body.dueDate,
    updatedBy: currentDate,
  }
  const result = await goalsService.createGoal(goal)
  res.send(result)
}

const deleteGoal = async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await goalsService.deleteGoal(id)
  res.send(result)
}

const getGoals = async (req: Request, res: Response) => {
  const result = await goalsService.getGoals()
  res.send(result)
}

const getGoal = async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await goalsService.getGoal(id)
  res.send(result)
}

const updateGoal = async (req: Request, res: Response) => {
  const { id } = req.params
  const { body } = req
  const result = await goalsService.updateGoal(id, body)
  res.send(result)
}

export default {
  createGoal,
  deleteGoal,
  getGoal,
  getGoals,
  updateGoal,
}
