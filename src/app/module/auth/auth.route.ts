import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { userValidation } from "../user/user.validation";
import { AuthController } from "./auth.controller";
import { authValidation } from "./auth.validation";

const router = Router()

router.post('/register', validateRequest(userValidation.userValidationSchema), AuthController.registerUser)
router.post('/login',validateRequest(authValidation.authValidationSchema),AuthController.loginUser)


export const AuthRouter = router