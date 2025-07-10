import { Router } from "express"
import { userController } from "./user.controller"
import validateRequest from "../../middleware/validateRequest"
import { userValidation } from "./user.validation"
import auth from "../../middleware/auth"
import { USER_ROLE } from "./user.constant"

const router = Router()

router.get('/',auth(USER_ROLE.teacher), userController.getAllusers)
router.get('/:id', userController.getSingleUser)
router.patch('/:id', validateRequest(userValidation.updateUserValidationSchema), userController.updateUser)
router.patch('/:id', userController.deleteUser)


export const UserRouter = router