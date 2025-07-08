import { TLogin } from './auth.interface';
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import AppError from '../../utils/AppError';
import bcrypt from 'bcrypt';
import tokenGenerator from './auth.utils';
import config from '../../config';

const registerUser = async (payload:TUser) =>{
    const result = await User.create(payload)
    return result;
}

const loginUser = async (payload: TLogin) => {
    const user = await User.findOne({email: payload.email}).select('+password')
    
    if (!user) {
        throw new AppError('User not found', 400)
    }

    if (user.isBlocked){
        throw new AppError('User is blocked', 400)
    }
    if (user.isDeleted) {
        throw new AppError('User is deleted', 400)
    }
    const isPasswordMatch = bcrypt.compareSync(payload.password, user.password)
    
    if (!isPasswordMatch) {
        throw new AppError('Password is incorrect', 400)
    }

    const jwtPayload = {
        email: user.email,
        role: user.role
    }
    
    const token = tokenGenerator(jwtPayload, config.jwt_access_secret as string, '7d')

    return token


    
}


export const AuthService = { 
    registerUser,
    loginUser
}