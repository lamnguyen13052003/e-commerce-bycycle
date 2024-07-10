import {ObjectId} from "mongodb";

export interface ReviewProductType{
    _id: ObjectId,
    user_id: string,
    name: string,
    rating: number,
    comment: string,
    date: Date
}
