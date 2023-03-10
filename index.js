import express from "express";
import { ProductManager } from "./src/ProductManager.js";
import productsRouter from './routes/products.router.js'
import cartRouter from './routes/cart.router.js'
import { __dirname } from './utils.js'

const app = express();
const productManager = new ProductManager("./src/utils/Products.json");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});

// ROUTES
app.use('/api/products', productsRouter)
app.use('/api/cart', cartRouter)

app.get("/products", async (req, res) => {
  try {
    const { limit } = req.query;
    const products = await productManager.getProducts(limit || "max");
    res.json({ products });
  } catch (error) {
    res.send(error);
  }
});

app.get("/products/:idProduct", async (req, res) => {
  const { idProduct } = req.params;
  console.log(idProduct);
  try {
    const product = await productManager.getProductById(idProduct);
    console.log(product);
    if (product) {
      res.json({ product });
    } else {
      res.send("Product not found");
    }
  } catch (error) {
    res.send(error);
  }
});
