import jwt, { SignOptions } from 'jsonwebtoken';

type TJwtPayload = {
    email: string;
    role: string;
}

const tokenGenerator = (jwtPayload:TJwtPayload, secret:string, expiresIn:string):string =>{
    const options:SignOptions = {
        expiresIn: expiresIn as SignOptions['expiresIn'], 
    }
 return jwt.sign(jwtPayload, secret, options);
}


export default tokenGenerator;