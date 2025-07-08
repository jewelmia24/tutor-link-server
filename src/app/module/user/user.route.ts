import { Router } from "express"
import { userController } from "./user.controller"

const router = Router()

router.get('/', userController.getAllusers)
router.get('/:id', userController.getSingleUser)


export const UserRouter = router