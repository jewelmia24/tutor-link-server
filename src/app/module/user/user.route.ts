import { Router } from "express"
import { userController } from "./user.controller"
import validateRequest from "../../middleware/validateRequest"
import { userValidation } from "./user.validation"

const router = Router()

router.get('/', userController.getAllusers)
router.get('/:id', userController.getSingleUser)
router.patch('/:id', validateRequest(userValidation.updateUserValidationSchema), userController.updateUser)
router.patch('/:id', userController.deleteUser)


export const UserRouter = router