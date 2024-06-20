import {connection} from "../database.connect";
import {ProductType} from "../types/product.type";

const collection = 'xe_dap';
const productRepository = connection.collection(collection);
async function getAll() {
    return productRepository
        .find<ProductType>({})
        .toArray()
}

async function getProductsByCategory(category: number){
    return productRepository
        .find<ProductType>({category: category}).limit(8)
        .toArray()
}
async function getProductsBestSale(bestSale: boolean){
    if (bestSale){
        return productRepository
            .find<ProductType>({sale: true}).sort({"discount" : -1}).limit(8)
            .toArray()

    }
    return productRepository
        .find<ProductType>({new : true}).limit(8)
        .toArray()
}
export {getAll, getProductsByCategory, getProductsBestSale};
