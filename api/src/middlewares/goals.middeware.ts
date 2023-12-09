import { Request, Response } from 'express'
import {
  createGoal as controllerCreateGoal,
  deleteGoal as controllerDeleteGoal,
  getGoal as controllerGetGoal,
  getGoals as controllerGetGoals,
  updateGoal as controllerUpdateGoal,
} from '../controllers/goals.controller'

export const createGoal = (req: Request, res: Response) => {
  const result = controllerCreateGoal()
  res.send(result)
}

export const deleteGoal = (req: Request, res: Response) => {
  const { id } = req.params
  const result = controllerDeleteGoal(Number(id))
  res.send(result)
}

export const getGoals = (req: Request, res: Response) => {
  const result = controllerGetGoals()
  res.send(result)
}

export const getGoal = (req: Request, res: Response) => {
  const { id } = req.params
  const result = controllerGetGoal(Number(id))
  res.send(result)
}

export const updateGoal = (req: Request, res: Response) => {
  const { id } = req.params
  const result = controllerUpdateGoal(Number(id))
  res.send(result)
}
