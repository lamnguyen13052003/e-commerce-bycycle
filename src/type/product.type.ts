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
    category: string
    products: ProductProps[]
    total: number
}
