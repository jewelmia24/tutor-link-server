import { TLogin } from './auth.interface';
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import AppError from '../../utils/AppError';
import bcrypt from 'bcrypt';

const registerUser = async (payload:TUser) =>{
    const result = await User.create(payload)
    return result;
}

const loginUser = async (payload: TLogin) => {
    const user = await User.findOne({email: payload.email})

    if (!user) {
        throw new AppError('User not found', 400)
    }

    const comparedPassword = bcrypt.compareSync(payload.password, user.password)
    
    if (!comparedPassword) {
        throw new AppError('Password is incorrect', 400)
    }
    
}


export const AuthService = { 
    registerUser,
    loginUser
}