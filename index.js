class ProductManager {
    constructor() {
        this.products = []
    }

    //creando un id con static
    static id = 0

    //metodo devuleve el array con los productos creados
   // getProduct = () => this.products;
      getProduct (){
        return this.products}

  //recibe un ID y si no coincide muestra error,si coincide nos muestra el producto con ese Id
  getProductById(id){
    if(!this.products.find((producto) => producto.id === id)){
      console.log("Not found");
    } else {
        console.log("Este es el producto buscado",this.products.find((producto) => producto.id === id));
    }
  }


    // metodo add product agrega los productos,recibe las caracteristicas,las transforma en obj y las pushea
    addProduct(title, decription, price, thumbnail, code, stock) {
         //validando que el CODE no se repita
         for(let i = 0; i< this.products.length; i++){
            if(this.products[i].code === code){
                console.log(`El codigo ${code} esta repetido`);
                break;
            }
         }

         const newProduct = {
            title, 
            decription, 
            price, 
            thumbnail, 
            code,
            stock
         }
         console.log("Solo values",Object.values(newProduct))

        const product = {
            title,
            decription,
            price,
            thumbnail,
            code,
            stock,
            
        }

        //si es primero ,como esta vacio,se le agrega el id = 1
        if (this.products.length === 0) {
            product.id = 1
        } else {
            product.id = this.products.length + 1
        }
        //pusheamos la prop id
        this.products.push(product)
        //console.log(product.addProduct());
    }
}
const producto = new ProductManager()

//agrego el producto1 con sus propiedades
producto.addProduct("producto prueba1", "Este es un producto prueba1",
 200, "Sin imagen", "abc123", 25);
//agrego 2do producto con sus propiedades
producto.addProduct("producto prueba2", "Este es un producto prueba2",
 200, "Sin imagen", "abc123", 25);
//traigo el producto agregado y lo leo
console.log(producto.getProduct())


//para buscar por Id
producto.getProductById(2);
