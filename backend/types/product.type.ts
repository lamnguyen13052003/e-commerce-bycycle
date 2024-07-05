import {ObjectId} from "mongodb";
import {BaseDescriptionProductType} from "./baseDescriptionProduct.type";
import {DetailDescriptionProductType} from "./detailDescriptionProduct.type";
import {SpecificationsType} from "./specifications.type";
import {ModelType} from "./modelProduct.type";

export type ProductType = {
    _id: ObjectId,
    sale?: boolean,
    new?: boolean,
    discount?: number,
    name: string,
    price: number,
    category: number,
    base_description: BaseDescriptionProductType,
    detail_description: DetailDescriptionProductType[],
    specifications: SpecificationsType[],
    model: ModelType[],
    review: ReviewProduct[]
}
interface ReviewProduct{
    _id: ObjectId,
    user_id: string,
    rating: number,
    comment: string,
    date: Date
}
