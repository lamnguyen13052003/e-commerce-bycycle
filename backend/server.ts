import express from "express";
import cors from "cors";
import {run} from "./database.connect";
import {runAuthController} from "./controller/auth.controller";
import {runProductController} from "./controller/product.controller";
import bodyParser = require("body-parser");

export const log = (tag: string, title: string, body: object) => {
    console.log(`=================================${tag}==================================`)
    console.log("title: ", title)
    console.log("body: ", body)
}


run().catch(() => {
    console.log("Failed to connect to MongoDB")
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) => {
    res.send("Hello World");
});

runProductController(app);

runAuthController(app);


app.listen(1305, () => {
    console.log("Server dep zai da chay o port 1305");
});
