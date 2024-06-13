import {Express} from "express";
import {Builder} from "builder-pattern";
import {ResponseApi} from "../types/response.type";
import {getAll as getAllProduct, getProductsByCategory} from "../service/product.service";
import {Product} from "../types/product.type";

export const runProductController = (app: Express) => {
    app.get("/api/products/all", (req, res) => {
        getAllProduct().then((response) => {
            res.send(Builder<ResponseApi<Product[]>>()
                .code(202)
                .message("Success")
                .data(response)
                .build());
        }).catch((error) => {
            console.error("Failed to get all products", error);
        })
    });

    app.get("/api/products?category=:category", (req, res) => {
        const category =parseInt( req.query.category as string);
        getProductsByCategory(category).then((response) => {
            res.send(Builder<ResponseApi<Product[]>>()
                .code(202)
                .message("Success")
                .data(response)
                .build());
        }).catch((error) => {
            console.error("Failed to get products by category", error);
        })
    });
}



