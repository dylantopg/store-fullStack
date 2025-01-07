import express, { Request, Response } from "express";
import { ProductQuerier } from "./adapters/drivens/ProductQuerier";
import { ProductService } from "./ProductService";
import { ProductAdapter } from "./adapters/drivers/ProductAdapter";

import path from "path";
import cors from "cors";
export const app = express();
const port = "3000";

// Parse json bodies
app.use(express.json());
app.use(cors());

// Serving react app static files
app.use("/", express.static(path.join(__dirname, "/public")));

// Instances
// Manual Dependency Injection
const productQuerier = new ProductQuerier();
const productService = new ProductService(productQuerier);
const productAdapter = new ProductAdapter(productService);

//seting up routes

app.get("/products/:id", async (req: Request, res: Response) => {
  await productAdapter.getById(req, res);
});
app.get("/products", async (req: Request, res: Response) => {
  await productAdapter.getByQuery(req, res);
});

// Its kinda a hello world?
app.listen(port, () => {
  console.log(
    `Fake Store Api listening on port ${port}, MADE BY DYLAN GUERRERO @dylantopg`
  );
});
