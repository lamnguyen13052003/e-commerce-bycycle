import {connection} from "../database.connect";
import {ProductProps} from "../types/product.type";

const collection = 'xe_dap';
const productRepository = connection.collection(collection);
async function getAll() {
    return productRepository
        .find<ProductProps>({})
        .toArray()
}

async function getProductsByCategory(category: number, count: number){
    const total = await  productRepository.countDocuments({category: category})
    const numOfDoc = 8
    const x = numOfDoc*count
    let y = 8+x
    if(y>= total) y = total
    const products = await  productRepository.find<ProductProps>({category: category}).limit(y) .toArray()

    return  {
        total: total,
        products:products
    }
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
