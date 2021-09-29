const express = require('express');
const products = require('../models/products.js');
const router = express.Router();
const productsSchema = require('../models/products.js');

router.get('/products', async (req, res) =>{
    try{
            const products = await productsSchema.find();
            res.json(products);
    }
    catch(err){
        res.send('Error on get request:' + err);
    }
});

router.get('/products/:id', async (req, res) =>{
    try{
            console.log(req.params.id);
            const product = await productsSchema.findById(req.params.id);
            res.json(product);
    }
    catch(err){
        res.send('Error on get request:' + err);
    }
});

router.post('/products', async(req, res) => {

    try{
        const productsList = new productsSchema({
            productid: req.body.productid,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
        });
        
        const data = await productsList.save();
        res.json(data);
    }
    catch(err){
        res.send('Error on post request:' + err);
    }
});

router.delete('/products/:id', async (req, res) =>{
    try{
            const product = await productsSchema.findById(req.params.id);
            product.price = req.body.price;
            const data = await product.delete();
            res.json(req.params.id +' record deleted');
    }
    catch(err){
        res.send('Error on get request:' + err);
    }
});

router.delete('/products/:id', async (req, res) =>{
    try{
            console.log(req.params.id);
            const product = await productsSchema.findById(req.params.id);
            res.json(product);
    }
    catch(err){
        res.send('Error on get request:' + err);
    }
});

module.exports = router;
