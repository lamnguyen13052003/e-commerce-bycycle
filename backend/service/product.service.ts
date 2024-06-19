import {connection} from "../database.connect";
import {ProductProps} from "../types/product.type";

const collection = 'xe_dap';
const productRepository = connection.collection(collection);

async function getAll() {
    return productRepository
        .find<ProductProps>({})
        .toArray()
}

async function getProductsByCategory(category: number, count: number) {
    const total = await productRepository.countDocuments({category: category})
    const numOfDoc = 8
    const x = numOfDoc * count
    let y = 8 + x
    if (y >= total) y = total
    const products = await productRepository.find<ProductProps>({category: category}).limit(y).toArray()

    return {
        total: total,
        products: products
    }
}

async function getProductsBestSale(bestSale: boolean) {
    if (bestSale) {
        return productRepository
            .find<ProductProps>({sale: true}).sort({"discount": -1}).limit(8)
            .toArray()

    }
    return productRepository
        .find<ProductProps>({new: true}).limit(8)
        .toArray()
}

async function getAttrForFilter() {
    // const brands: string[] = await productRepository.distinct('base_description.brand')
    // const minPrice  = await productRepository.find({}).sort({ price: 1 }).limit(1).toArray()
    // const maxPrice  = await productRepository.find({}).sort({ price: 1 }).limit(1).toArray()
    // const wheelSizes: string[] = await productRepository.distinct('specifications.wheelSize')
    // const materials: string[] = await productRepository.distinct('base_description.material')
    // const targetUsings: string[] = await productRepository.distinct('specifications.targetUsing')
    const result = Promise.all(
        [productRepository.distinct('base_description.brand'),
            productRepository.distinct('specifications.wheelSize'),
            productRepository.distinct('base_description.material'),
            productRepository.distinct('specifications.targetUsing'),
            productRepository.find({}).sort({ price: 1 }).limit(1).toArray(),
            productRepository.find({}).sort({ price: -1 }).limit(1).toArray()])
    return result.then((values) => {
        return {
            brands: values[0],
            wheelSizes: values[1],
            materials: values[2],
            targetUsings: values[3],
            prices: {min: values[4][0].price, max: values[5][0].price}
        }
    })

}

export {getAll, getProductsByCategory, getProductsBestSale, getAttrForFilter};
