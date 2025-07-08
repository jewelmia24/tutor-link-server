import { TUser } from "./user.interface"
import { User } from "./user.model"

const getAllusers = async () => {
    const result = await User.find()
    return result
}

const getSingleUser = async (id: string) => {
    const result = await User.findById(id)
    return result
}

const updateUser = async (id: string, data: Partial<TUser>) => {
    const result = await User.findByIdAndUpdate(id, data, { new: true })
    return result
}

const deleteUser = async (id: string) => {
    const result = await User.findOneAndUpdate(
        { _id: id },
        { isDeleted: true },
        { new: true }
    )
    return result
}



export const userService = {
    getAllusers,
    getSingleUser,
    updateUser,
    deleteUser
}