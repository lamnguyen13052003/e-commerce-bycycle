import {connection} from "../database.connect";
import {ProductType} from "../types/product.type";
import {Sort} from "mongodb";

const collection = 'xe_dap';
const productRepository = connection.collection(collection);

async function getAll() {
    return productRepository
        .find<ProductType>({})
        .toArray()
}

async function getProductsByCategory(category: number, count: number) {
    const total = await productRepository.countDocuments({category: category})
    const numOfDoc = 8
    const x = numOfDoc * count
    let y = 8 + x
    if (y >= total) y = total

    const products = await productRepository.find<ProductType>({category: category}).limit(y).toArray()

    return {
        total: total,
        products: products
    }
}

async function getProductsByFilter(
    category: number,
    count: number,
    brands?: string[],
    wheelSizes?: string[],
    materials?: string[],
    targetUsings?: string[],
    price?: string,
    newProduct?: boolean,
    bestSale?: boolean,
    sort?: string,) {


    const query = getQuery(category, brands, wheelSizes, materials, targetUsings, price, newProduct, bestSale)
    const sortQuery: Sort = ((sort===undefined? 'asc': sort) === 'asc'? {"price": 1} :  {"price": -1})
    const total = await productRepository.countDocuments(query)
    const numOfDoc = 8
    const x = numOfDoc * count
    let y = 8 + x
    if (y >= total) y = total
    const products = await productRepository.find<ProductType>(query).sort(sortQuery).limit(y).toArray()

    return {
        total: total,
        products: products
    }
}
function getQuery(
    category: number,
    brands?: string[],
    wheelSizes?: string[],
    materials?: string[],
    targetUsings?: string[],
    price?: string,
    newProduct?: boolean,
    bestSale?: boolean,
): {}{

    let query: {} = {category: category}
    let [minPrice, maxPrice] = (price=== undefined? price = '0-0' : price as string).split('-').map(Number)

    if (brands !== undefined){
        const brandsArr = customQuery(brands)
        query = {...query, 'base_description.brand': {$in: brandsArr}}
    }
    if (wheelSizes !== undefined) {
        const wheelSizesArr = customQuery(wheelSizes)
        query = {...query, 'specifications.wheelSize': {$in: wheelSizesArr}}
    }
    if (materials !== undefined) {
        const materialsArr = customQuery(materials)
        query = {...query, 'base_description.material': {$in: materialsArr}}
    }
    if (targetUsings !== undefined) {
        const targetUsingsArr = customQuery(targetUsings)
        query = {...query, 'specifications.targetUsing': {$in: targetUsingsArr}}
    }
    if (maxPrice !== 0) {
        query = {...query, price: {$gte: minPrice, $lte: maxPrice}}
    }
    if (newProduct) {
        query = {...query, new: newProduct}
    }
    if (bestSale) {
        query = {...query, sale: bestSale}
    }

    return query
}
async function getProductsBestSale(bestSale: boolean) {
    if (bestSale) {
        return productRepository
            .find<ProductType>({sale: true}).sort({"discount": -1}).limit(8)
            .toArray()

    }
    return productRepository
        .find<ProductType>({new: true}).limit(8)
        .toArray()
}

async function getAttrForFilter(category: number) {
    const result = Promise.all(
        [productRepository.distinct('base_description.brand', {category: category}),
            productRepository.distinct('specifications.wheelSize', {category: category}),
            productRepository.distinct('base_description.material', {category: category}),
            productRepository.distinct('specifications.targetUsing', {category: category}),
            productRepository.find({category: category}).sort({price: 1}).limit(1).toArray(),
            productRepository.find({category: category}).sort({price: -1}).limit(1).toArray()])
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

function customQuery(arr: string[])  {
    if (arr.length === 0) return []

    return arr.map((item) => {
       return  item.replace('-', ' ')
    })
}

export {getAll, getProductsByCategory, getProductsBestSale, getAttrForFilter, getProductsByFilter};
