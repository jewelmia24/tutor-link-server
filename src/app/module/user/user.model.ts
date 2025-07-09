/* eslint-disable @typescript-eslint/no-explicit-any */
import { model, Query, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from 'bcrypt';
import config from "../../config";

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
      select: false, // Do not return password in queries
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


userSchema.pre('save', async function (next){
  this.password = await bcrypt.hash(this.password, Number(config.bcrypt_salt_round))
  next()

})

userSchema.post('save', function (doc,next){
  doc.password=''
  next()
})

// userSchema.pre('find', function (next){
//   this.find({isDeleted:{$ne:true},isBlocked:{$ne:true}})
//   next()
// })
// userSchema.pre('findOne', function (next){
//   this.findOne({isDeleted:{$ne:true},isBlocked:{$ne:true}})
//   next()
// })
// userSchema.pre('findOneAndUpdate', function (next){
//   this.findOneAndUpdate({isDeleted:{$ne:true},isBlocked:{$ne:true}})
//   next()
// })

userSchema.pre(/^find/, function (next) {
  (this as Query<any, any>).where({ isDeleted: { $ne: true }, isBlocked: { $ne: true } });
  next();
});



export const User = model<TUser>("User", userSchema);