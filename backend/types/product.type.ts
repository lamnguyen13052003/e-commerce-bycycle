import {ObjectId} from "mongodb";

export interface ProductType {
    _id: ObjectId,
    sale?: boolean,
    new?: boolean,
    discount?: number,
    imagePath: string,
    name: string,
    price: number,
    category: number
}