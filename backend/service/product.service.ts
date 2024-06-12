import {connection} from "../database.connect";
import {Product} from "../types/product.type";

const collection = 'xe_dap';

async function getAll() {
    return connection
        .collection(collection)
        .find<Product>({})
        .toArray()
}

export {getAll};
