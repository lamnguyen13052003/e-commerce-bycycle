import {ObjectId} from "mongodb";
/*
xe dap tre em: 0
xe dap the thao: 1
xe dap dia hinh: 2
xe dap dua: 3
xe dap touring: 4
xe dap nu: 5
xe dap gap : 6
 */
export type Product = {
    id: ObjectId
    sale?: boolean,
    new?: boolean,
    discount?: number,
    quantity?: number,
    image: string,
    name: string,
    price: number,
    category: number,
}
