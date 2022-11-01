const express = require("express");
const { Router } = require("express");
const Database = require("./database");
const app = require("./main");


const router = express.Router();


const db = new Database;


router.get('/', (req, res) => {
        res.json(db.getAll());
  });

router.get('/:id', (req, res,next) => {
    const producto = db.find(parseInt(req.params.id));
    if (!producto) {
        
        res.status(400).send({ error : 'producto no encontrado' });
        return next();
    }
    console.log(producto);
    res.json(producto);
  });

router.post ('/', (req,res)=>{
    
    const newProduct = db.post(req.body)
  
    res.json(newProduct);
})

router.delete('/:id', (req, res) => {
    const producto= db.delete(req.params.id);
    res.json(producto);
  });

router.put('/:id', (req,res) => {
    const updatedProduct=db.update(req.params.id,req.body);
    res.json(updatedProduct);

});

module.exports = router;