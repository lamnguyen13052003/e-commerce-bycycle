import {ObjectId} from "mongodb";

export type CartItemType = {
    productId: ObjectId;
    quantity: number;
}