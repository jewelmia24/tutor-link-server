
import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthService } from "./auth.service";
const registerUser = catchAsync(async (req, res)=>{
    const result = await AuthService.registerUser(req.body)
    
    sendResponse(res,{
        statusCode: StatusCodes.CREATED,
        success: true,
        message: "User registered successfully",
        data: result
    })
})

const loginUser = catchAsync(async (req, res)=>{
    const result = await AuthService.loginUser(req.body)
     sendResponse(res,{
        statusCode: StatusCodes.OK,
        success: true,
        message: "User logged in successfully",
        data: result
    })
})

export const AuthController = {
    registerUser,
    loginUser
};