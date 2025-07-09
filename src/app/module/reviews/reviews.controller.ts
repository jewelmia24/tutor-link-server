import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ReviewsService } from "./reviews.service";

const createReviews = catchAsync( async (req, res)=> {
    const result = await ReviewsService.createReview(req.body);
    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        success: true,
        message: 'Reviews created successfully',
        data: result,
    })
})

const getTutorReviews = catchAsync( async (req, res)=> {
    const { id } = req.params;
    const result = await ReviewsService.getTutorReviews(id);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Tutor reviews fetched successfully',
        data: result,
    })
})

export const reviewsController = {
    createReviews,
    getTutorReviews,
}