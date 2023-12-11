import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'
import { isValidObjectId } from 'mongoose'

const goalSchemaPUT = Joi.object({
  description: Joi.string(),
  dueDate: Joi.date(),
})
  .required()
  .min(1)
  .options({ stripUnknown: true })

const goalSchemaPOST = Joi.object({
  description: Joi.string().required(),
  dueDate: Joi.date().required(),
})
  .required()
  .options({ stripUnknown: true })

const goalValidator = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req
  const schema = (req.method === 'PUT') ? goalSchemaPUT : goalSchemaPOST
  const { error, value } = schema.validate(body)

  if (error) {
    next(error)
    return
  }

  req.body = value

  next()
}

const idValidator = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  if (isValidObjectId(id)) {
    next()
  } else {
    res.send('Invalid Id')
  }
}

export default { goalValidator, idValidator }
