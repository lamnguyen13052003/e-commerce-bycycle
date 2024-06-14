import {ObjectId} from "mongodb";

export interface ProductProps {
    _id: ObjectId,
    sale?: boolean,
    new?: boolean,
    discount?: number,
    imagePath: string,
    name: string,
    price: number,
    category: number
}