import {ObjectId} from "mongodb";

export type GetProductRequest ={
    id: ObjectId
    sale?: boolean,
    new?: boolean,
    discount?: number,
    quantity?: number,
    imagePath: string,
    name: string,
    price: number,
    category: number,
}