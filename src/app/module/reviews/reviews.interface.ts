import { Types } from "mongoose";

export type TReview = {
    tutorId: Types.ObjectId;
    studentId: Types.ObjectId;
    rating: number;
    comment: string;
}