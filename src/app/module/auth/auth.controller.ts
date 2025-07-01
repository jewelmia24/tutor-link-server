
import { catchAsync } from "../../utils/catchAsync";
import { AuthService } from "./auth.service";
const registerUser = catchAsync(async (req, res)=>{
    const result = await AuthService.registerUser(req.body)
    res.status(200).json({
        success: true,
        message: "User registered successfully",
        data: result
    });
})

export const AuthController = {
    registerUser
};