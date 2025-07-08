import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userService } from "./user.service";
import { StatusCodes } from "http-status-codes";

const getAllusers = catchAsync(async (req, res) => {
    const result = await userService.getAllusers();
    sendResponse(res, {
        message: "Users retrieved successfully",
        statusCode: StatusCodes.OK,
        success: true,
        data: result
    })
});

const getSingleUser = catchAsync(async (req, res) =>{
    const {id} = req.params
    const result = await userService.getSingleUser(id)
    sendResponse(res,{
        success: true,
        message: "User retrieved successfully",
        statusCode: StatusCodes.OK,
        data: result
    })
})

const updateUser = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await userService.updateUser(id, req.body);
    sendResponse(res, {
        message: "User updated successfully",
        statusCode: StatusCodes.OK,
        success: true,
        data: result
    })
})

export const userController = {
    getAllusers,
    getSingleUser,
    updateUser,
};