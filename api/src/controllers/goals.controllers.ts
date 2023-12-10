import { Request, Response } from 'express'
import goalsService from '../services/goals.service'

export const createGoal = async (req: Request, res: Response) => {
  const result = goalsService.createGoal()
  res.send(result)
}

export const deleteGoal = async (req: Request, res: Response) => {
  const { id } = req.params
  const result = goalsService.deleteGoal(Number(id))
  res.send(result)
}

export const getGoals = async (req: Request, res: Response) => {
  const result = goalsService.getGoals()
  res.send(result)
}

export const getGoal = async (req: Request, res: Response) => {
  const { id } = req.params
  const result = goalsService.getGoal(Number(id))
  res.send(result)
}

export const updateGoal = async (req: Request, res: Response) => {
  const { id } = req.params
  const result = goalsService.updateGoal(Number(id))
  res.send(result)
}
