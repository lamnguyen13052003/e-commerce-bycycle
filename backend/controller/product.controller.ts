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
    const qs = require('qs')
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
    app.get("/api/products/:category/filter-attribute", (req, res) => {
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

    app.get("/api/products/:category/page=:page/filter", (req, res) => {
        const query = qs.parse(req.query);

        const category: number = parseInt(req.params.category as string);
        const seeMore: number = parseInt(req.params.page as string);
        const brands : string[] = query.brands as string[];
        const wheelSizes : string[] = query.wheelSizes as string[];
        const materials : string[] = query.materials as string[];
        const targetUsings : string[] = query.targetUsings as string[];
        const prices: string = req.query.prices as string
        const newProduct : boolean = query.newProduct as string == "true";
        const bestSale : boolean = query.bestSale as string == "true";
        const sort : string = query.sort as string;
        getProductsByCategory(category, seeMore, brands, wheelSizes, materials, targetUsings, prices, newProduct, bestSale, sort).then((response) => {
            res.send(Builder<ResponseApi<ProductPropsHasTotal>>()
                .code(202)
                .message("Success")
                .data(response)
                .build());
        }).catch((error) => {
            console.error("Failed to get products by mix filter", error);
        })
    })
}



