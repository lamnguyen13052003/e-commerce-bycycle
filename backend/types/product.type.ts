import {ObjectId} from "mongodb";

export interface ProductProps {
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
}
interface DetailDescription {
    title: string,
    content: string,
    illustrationPathImage: string,
}
interface Specifications {

}
interface Model {
   color: string,
    pathImageColor: string
}
export interface ProductPropsHasTotal{
    total: number,
    products: ProductProps[]
}
interface ReviewProduct{
    _id: ObjectId,
    product_id: string,
    user_id: string,
    rating: number,
    comment: string,
    date: Date
}
