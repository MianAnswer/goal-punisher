import { UUID, randomUUID } from 'crypto'
import IGoal from './goal'

class GoalModel implements IGoal {
  private createdBy: Date

  private completed: boolean

  private description: string

  private dueDate: Date

  private id: UUID

  private updatedBy: Date

  constructor(description: string, dueDate: Date) {
    const currentDate = new Date()

    this.createdBy = currentDate
    this.completed = false
    this.description = description
    this.dueDate = dueDate
    this.id = randomUUID()
    this.updatedBy = currentDate
  }

  public getCreatedBy(): Date {
    return this.createdBy
  }

  public getCompleted(): boolean {
    return this.completed
  }

  public getDescription(): string {
    return this.description
  }

  public getDueDate(): Date {
    return this.dueDate
  }

  public getId(): `${string}-${string}-${string}-${string}-${string}` {
    return this.id
  }

  public getUpdatedBy(): Date {
    return this.updatedBy
  }

  public setDescription(description: string): void {
    this.description = description
    this.updatedBy = new Date()
  }

  public setDueDate(dueDate: Date): void {
    this.dueDate = dueDate
    this.updatedBy = new Date()
  }
}

export default GoalModel
