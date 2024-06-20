import {ObjectId} from "mongodb";

export type CartItemType = {
    id: string,
    url: string,
    name: string,
    type: string,
    price: number,
    quantity: number,
}