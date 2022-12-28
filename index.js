const fs = require("fs");

class ProductManager {
  constructor() {
    this.products = [];
    this.path = "Products.json";
  }
  async getProducts() {
    try {
      if (fs.existsSync(this.path)) {
        const productInfo = await fs.promises.readFile(this.path, "utf-8");
        const productInfoJS = JSON.parse(productInfo);
        return productInfoJS;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  async addProduct(title, description, price, thumbnail, stock, id) {
    try {
      if (!title || !description || !price || !thumbnail || !stock) {
        return console.log("Producto incompleto");
      } else {
        const product = {
          title,
          description,
          price,
          thumbnail,
          stock,
          id: this.#generarId(),
        };
        if (this.products.find((e) => e.id === id)) {
          console.log("no se pueden repetir los id");
        } else {
          this.products.push(product);
          await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, 2))
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  getProductById(id) {
    this.products.find((e) => e.id === id)
      ? console.log(this.products.find((e) => e.id === id))
      : console.log("no se encontro");
  }

  #generarId() {
    const id =
      this.products.length === 0
        ? 1
        : this.products[this.products.length - 1].id + 1;
    return id;
  }
}

const productManager = new ProductManager();

const product1 = productManager.addProduct(
  "titulo",
  "una descripcion corta",
  300,
  "no tiene foto",
  8
);
const product2 = productManager.addProduct(
  "titulin",
  "una descripcion ",
  200
  // "no tiene foto",
  // 10
);
const product3 = productManager.addProduct(
  "titulin",
  "una descripcion ",
  200,
  "no tiene foto",
  10
);

productManager.getProducts();
// productManager.getProductById(5);
