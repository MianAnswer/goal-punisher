import { Request, Response } from 'express'
import {
  createGoal as serviceCreateGoal,
  deleteGoal as serviceDeleteGoal,
  getGoal as serviceGetGoal,
  getGoals as serviceGetGoals,
  updateGoal as serviceUpdateGoal,
} from '../services/goals.service'

export const createGoal = (req: Request, res: Response) => {
  const result = serviceCreateGoal()
  res.send(result)
}

export const deleteGoal = (req: Request, res: Response) => {
  const { id } = req.params
  const result = serviceDeleteGoal(Number(id))
  res.send(result)
}

export const getGoals = (req: Request, res: Response) => {
  const result = serviceGetGoals()
  res.send(result)
}

export const getGoal = (req: Request, res: Response) => {
  const { id } = req.params
  const result = serviceGetGoal(Number(id))
  res.send(result)
}

export const updateGoal = (req: Request, res: Response) => {
  const { id } = req.params
  const result = serviceUpdateGoal(Number(id))
  res.send(result)
}
