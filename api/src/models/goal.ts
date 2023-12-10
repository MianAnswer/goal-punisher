import { UUID } from 'crypto'

interface IGoal {
  getCreatedBy: () => Date
  getCompleted: () => boolean
  getDescription: () => string
  getDueDate: () => Date
  getId: () => UUID
  getUpdatedBy: () => Date
  // eslint-disable-next-line no-unused-vars
  setDescription: (description: string) => void
  // eslint-disable-next-line no-unused-vars
  setDueDate: (dueDate: Date) => void
}

export default IGoal
