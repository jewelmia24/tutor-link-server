import { StatusCodes } from "http-status-codes"
import AppError from "../utils/AppError"
import { catchAsync } from "../utils/catchAsync"
import jwt, { JwtPayload } from "jsonwebtoken"
import config from "../config"
import { User } from "../module/user/user.model"
import { TUserRole } from "../module/user/user.interface"

const auth = (...requiredRole:TUserRole[])=>{
    return catchAsync(async (req,res, next)=>{
        const token = req.headers.authorization
        if(!token){
            throw new AppError('You are not authorized', StatusCodes.UNAUTHORIZED)
        }

        const decoded = jwt.verify(token, config.jwt_access_secret as string)
        const {email,role} = decoded as JwtPayload

        console.log(decoded)

        const user = await User.findOne({email})

        if(!user){
            throw new AppError('User not found', StatusCodes.NOT_FOUND)
        }

        const isDeleted = user.isDeleted
        if(isDeleted){
            throw new AppError('User is deleted', StatusCodes.FORBIDDEN)
        }

        const isBlocked = user.isBlocked
        if(isBlocked){
            throw new AppError('User is blocked', StatusCodes.FORBIDDEN)
        }

        if(requiredRole && !requiredRole.includes(role)){
            throw new AppError('You are not authorized', StatusCodes.FORBIDDEN)
        }

        req.user = user

        next()
    })
}

export default auth

