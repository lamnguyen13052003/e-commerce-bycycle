import {Express} from "express";
import {Builder} from "builder-pattern";
import {ResponseApi} from "../types/response.type";
import {getAll as getAllProduct, getProductsBestSale, getProductsByCategory} from "../service/product.service";
import {ProductProps} from "../../src/components/product";

export const runProductController = (app: Express) => {
    app.get("/api/products/all", (req, res) => {
        getAllProduct().then((response) => {
            res.send(Builder<ResponseApi<ProductProps[]>>()
                .code(202)
                .message("Success")
                .data(response)
                .build());
        }).catch((error) => {
            console.error("Failed to get all products", error);
        })
    });

    app.get("/api/products/:category", (req, res) => {
        const category = parseInt( req.params.category as string);
        getProductsByCategory(category).then((response) => {
            res.send(Builder<ResponseApi<ProductProps[]>>()
                .code(202)
                .message("Success")
                .data(response)
                .build());
        }).catch((error) => {
            console.error("Failed to get products by category", error);
        })
    });
    app.get("/api/products/best-sale/:bestSale", (req, res) => {
        const bestSale: boolean =  req.params.bestSale as string == "true";
        getProductsBestSale(bestSale).then((response) => {
            res.send(Builder<ResponseApi<ProductProps[]>>()
                .code(202)
                .message("Success")
                .data(response)
                .build());
        }).catch((error) => {
            console.error("don't load product best sale", error);
        })
    });
}



