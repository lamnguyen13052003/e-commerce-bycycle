import {ObjectId} from "mongodb";

export interface ReviewProduct{
    _id: ObjectId,
    user_id: string,
    name: string,
    email: string,
    rating: number,
    comment: string,
    date: Date
}
