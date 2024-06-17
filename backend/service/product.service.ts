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

//  count is the number of click button "Tai them san pham", default is 0
async function getProductsByLimit(count: number, category: number){
    const total = await productRepository.countDocuments({category: category})
    const numOfDoc = 8
    const x = numOfDoc*count
    let y = 8+x
    if(y >= total && x < total) y = total - x
    if(x>= total) return


    return productRepository
        .find<ProductProps>({category: category}).skip(x).limit(y)
        .toArray()
}
export {getAll, getProductsByCategory, getProductsBestSale, getProductsByLimit};
