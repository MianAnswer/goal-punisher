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

const deleteGoal = async (id: string) => {
  try {
    const result = await GoalModel.deleteOne({ id })
    return `id: ${id}\nawknowledged: ${result.acknowledged}`
  } catch (error) {
    return `${error}`
  }
}

const getGoal = async (id: string) => {
  try {
    const result = await GoalModel.findById(id)
    return JSON.stringify(result != null ? result.toJSON() : '{}')
  } catch (error) {
    return `${error}`
  }
}

const getGoals = async () => {
  try {
    const result = await GoalModel.find()
    return result.toString()
  } catch (error) {
    return `${error}`
  }
}

const updateGoal = async (id: string, goal: IGoal) => {
  try {
    const result = await GoalModel.updateOne({ id }, goal)
    return result.toString()
  } catch (error) {
    return `${error}`
  }
}

export default {
  createGoal,
  deleteGoal,
  getGoal,
  getGoals,
  updateGoal,
}
