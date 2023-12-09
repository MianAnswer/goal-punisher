import { Router } from 'express'
import goalsRouter from './goals'

const v1Router = Router()

v1Router.use('/goals', goalsRouter)

export default v1Router
