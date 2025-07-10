import { USER_ROLE } from "./user.constant";

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: 'student' | 'teacher';
  bio?: string;
  subjects?: string[];
  ratings?: number[];

  availability?: {
    from: Date,
    to : Date
  };
  address?: string;
  phone?: string;
  image?: string;
  isDeleted?: boolean;
  isBlocked?: boolean;

}


export type TUserRole = keyof typeof USER_ROLE