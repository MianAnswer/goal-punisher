import IGoal from '../models/goal'
import GoalModel from '../models/goal.model'

const createGoal = async (goal: IGoal) => {
  try {
    const result = await GoalModel.create(goal)
    return JSON.stringify(result.toJSON())
  } catch (error) {
    return `${error}`
  }
}

const deleteGoal = (id: number) => {
  return `goals.service/deleteGoal${id} needs implementation`
}

const getGoal = (id: number) => {
  return `goals.service/getGoal${id} needs implementation`
}

const getGoals = async () => {
  try {
    const result = await GoalModel.find()
    return result.toString()
  } catch (error) {
    return `${error}`
  }
}

const updateGoal = (id: number) => {
  return `goals.service/updateGoal${id} needs implementation`
}

export default {
  createGoal,
  deleteGoal,
  getGoal,
  getGoals,
  updateGoal,
}
