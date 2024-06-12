import {ObjectId} from "mongodb";

export type Product = {
    id: ObjectId
    title?: string,
    quantity?: number,
    price?: number,
}
