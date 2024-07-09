import {ObjectId} from "mongodb";

export interface ReviewProductType{
    _id: ObjectId,
    user_id: ObjectId,
    name: string,
    arlAvatar: string,
    email: string,
    rating: number,
    comment: string,
    date: Date
}
