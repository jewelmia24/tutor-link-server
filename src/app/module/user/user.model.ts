import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
     
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['student', 'teacher'],
      required: true,
    },
    bio: {
      type: String,
    },
   
    subjects: {
      type: [String],
      default: [],
    },
    ratings: {
      type: [Number],
      default: [],
    },
    availability: {
      from: {
        type: Date,
      },
      to: {
        type: Date,
      },
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    image: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true}
)


export const User = model<TUser>("User", userSchema);