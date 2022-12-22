class ProductManager {
  constructor() {
    this.products = [];
  }
  addProduct(title, description, price, thumbnail, stock, id) {
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
      }
    }

  }
  getProducts() {
    console.log(this.products);
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
