
import { StatusCodes } from "http-status-codes";
import AppError from "../../utils/AppError";
import { User } from "../user/user.model";
import { TReview } from "./reviews.interface";
import { Review } from "./reviews.model";

const createReview = async (payload:TReview) =>{
    const { tutorId,rating} = payload
    const isTutorExists = await User.exists({ _id:tutorId})
    if (!isTutorExists) {
        throw new AppError('Tutor not found', StatusCodes.NOT_FOUND);
    }

    await User.findByIdAndUpdate(tutorId, {
        $push: { ratings: rating}
    })

    const result = await Review.create(payload);
    return result;
}

const getTutorReviews = async (tutorId:string) => {
    const reviews = await Review.find({ tutorId }).populate('studentId', 'name email image');
    if (!reviews || reviews.length === 0) {
        throw new AppError('No reviews found for this tutor', StatusCodes.NOT_FOUND);
    }
    return reviews;

}


export const ReviewsService = {
    createReview,
    getTutorReviews,
};