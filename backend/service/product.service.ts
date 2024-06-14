import {connection} from "../database.connect";
import {ProductProps} from "../types/product.type";

const collection = 'xe_dap';
const productRepository = connection.collection(collection);
async function getAll() {
    return productRepository
        .find<ProductProps>({})
        .toArray()
}

async function getProductsByCategory(category: number){
    return productRepository
        .find<ProductProps>({category: category}).limit(8)
        .toArray()
}
async function getProductsBestSale(bestSale: boolean){
    if (bestSale){
        return productRepository
            .find<ProductProps>({sale: true}).sort({"discount" : -1}).limit(8)
            .toArray()

    }
    return productRepository
        .find<ProductProps>({new : true}).limit(8)
        .toArray()
}
export {getAll, getProductsByCategory, getProductsBestSale};
