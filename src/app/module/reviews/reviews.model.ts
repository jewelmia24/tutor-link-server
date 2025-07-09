import { model, Schema } from "mongoose";
import { TReview } from "./reviews.interface";

const reviewSchema = new Schema<TReview>({
    tutorId:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    studentId:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true,
        maxlength: 500
    }
},
{timestamps: true} // Automatically manage createdAt and updatedAt fields
)



export const Review = model<TReview>("Review", reviewSchema);