import {ObjectId} from "mongodb";

export type Product = {
    id: ObjectId
    sale?: boolean,
    new?: boolean,
    discount?: number,
    quantity?: number,
    image: string,
    name: string,
    price: number,
    category: string,
}
