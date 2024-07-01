import {ObjectId} from "mongodb";

export default interface ProductProps {
    _id: ObjectId,
    sale?: boolean,
    new?: boolean,
    discount?: number,
    name: string,
    price: number,
    category: number,
    base_description: BaseDescription,
    detail_description: DetailDescription[],
    specifications: Specifications[],
    model: Model[],
    review: ReviewProduct[]
}
interface BaseDescription {
    product_id: string,
    brand: string,
    made: string,
    size: string,
    material: string,
}
interface DetailDescription {
    title: string,
    content: string,
    illustrationPathImage: string,
}
interface Specifications {
    frameSize: string,
    frameMaterial: string,
    wheelSize: string,
    drivetrain: string,
    ForkAndSuspension: string,
    brakeType: string,
    saddleMaterial: string,
    weight: string,
    includedAccessories: string,
    handlebarsAndStem: string,
    warranty: string,
    brandAndModel: string,
    targetUsing: string
}
interface Model {
    color: string,
    pathImageColor: string
}
export interface ProductPropsHasTotal{
    category: string
    products: ProductProps[]
    total: number
}
interface ReviewProduct{
    _id: ObjectId,
    user_id: string,
    rating: number,
    comment: string,
    date: Date
}
