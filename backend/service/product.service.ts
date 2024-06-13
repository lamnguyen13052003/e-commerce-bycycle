import {connection, run} from "../database.connect";
import {Product} from "../types/product.type";
import {Schema} from "node:inspector";

const collection = 'xe_dap';
const productRepository = connection.collection(collection);
async function getAll() {
    return productRepository
        .find<Product>({})
        .toArray()
}

async function getProductsByCategory(category: number){
    return productRepository
        .find<Product>({category: category}).limit(12)
        .toArray()
}
async function getProductsBestSale(bestSale: boolean){
    if (bestSale){
        return productRepository
            .find<Product>({"sale": true}).sort({"sale" : -1}).limit(12)
            .toArray()

    }
    return productRepository
        .find<Product>({"new" : true}).sort({"new": -1}).limit(12)
        .toArray()
}
export {getAll, getProductsByCategory, getProductsBestSale};
