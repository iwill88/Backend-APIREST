

class Database {
    constructor (id) {
        this.id = id,
        this.database = [
    
            {
                title:"Escuadra",
                price:123.45,
                thumbnail:"https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
                id:1
            },
            {
                title:"Calculadora",
                price:234.56,
                thumbnail:"https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
                id:2
            },
            {
                title:"Globo Terráqueo",
                price:345.67,
                thumbnail:"https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
                id:3
            }
        
        ]
    }


    getAll(){
        console.log(this.database)
        return this.database;
    }
    find(id) {
        console.log("id",id);
        return this.database.find((item) => item.id === id);
    }

    post(newProduct) {
        let product = {
            ...newProduct,
            id: this.database.length+1
        }
        this.database.push(newProduct);
        return product;
    }

    delete(id) {
        const index=this.database.findIndex((item) => item.id === parseInt(id));
        const producto=this.database.splice(index,1);
        console.log(producto);
        return producto;
    }

    update(id,body) {
        let index = this.database.findIndex((item) => item.id === parseInt(id));
        let updatedProduct = { id:parseInt(id),...body};
        this.database[index] = updatedProduct;
        return updatedProduct;

    }
}

module.exports = Database;