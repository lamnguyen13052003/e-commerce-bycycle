import {Express} from "express";
import {Builder} from "builder-pattern";
import {ResponseApi} from "../types/response.type";
import {
    getAll as getAllProduct, getAttrForFilter,
    getProductsBestSale,
    getProductsByCategory,
} from "../service/product.service";
import {ProductProps, ProductPropsHasTotal} from "../types/product.type";
import FilterAttributeType from "../types/filterAttribute.type";

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

    app.get("/api/products/:category/page=:page", (req, res) => {
        const category = parseInt(req.params.category as string);
        const seeMore = parseInt(req.params.page as string);
        getProductsByCategory(category, seeMore).then((response) => {
            res.send(Builder<ResponseApi<ProductPropsHasTotal>>()
                .code(202)
                .message("Success")
                .data(response)
                .build());
        }).catch((error) => {
            console.error("Failed to get products by category", error);
        })
    });
    app.get("/api/products/best-sale/:bestSale", (req, res) => {
        const bestSale: boolean = req.params.bestSale as string == "true";
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
    app.get("/api/products/:category/filter", (req, res) => {
        const category = parseInt(req.params.category as string);
        getAttrForFilter(category).then((response) => {
            res.send(Builder<ResponseApi<FilterAttributeType>>()
                .code(202)
                .message("Success")
                .data(response)
                .build());
        }).catch((error) => {
            console.error("Failed to get filter attributes", error);
        })
    })
}



