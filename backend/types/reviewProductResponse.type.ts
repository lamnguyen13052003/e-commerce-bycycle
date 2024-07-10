import {ObjectId} from "mongodb";

export interface ReviewProductResponseType {
    _id?: ObjectId,
    name: string,
    userId: ObjectId,
    avatar: string,
    rating: number,
    comment: string,
    date: Date
}
