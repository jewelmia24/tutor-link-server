import { Router } from "express";
import { reviewsController } from "./reviews.controller";

const route = Router()

route.post('/create-reviews',  reviewsController.createReviews)
route.get('/:id', reviewsController.getTutorReviews)


export const ReviewsRoute = route