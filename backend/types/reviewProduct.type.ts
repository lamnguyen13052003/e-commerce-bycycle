import {ObjectId} from "mongodb";

export interface ReviewProduct{
    _id: ObjectId,
    user_id: string,
    rating: number,
    comment: string,
    date: Date
}
