const express = require("express");
const Product = require("../models/product");

const productRouter = express.Router();
//post product
productRouter.post('/add', async (req, res) => {
    try {
        let newproduct = new Product(req.body);
        let result = await newproduct.save();
        res.status(200).send({ product: result, msg: "Product is added" })
    } catch (error) {
        console.log(error);
    }

});

//get all product
productRouter.get('/', async (req, res) => {
    try {

        let result = await Product.find();
        res.send({ product: result, msg: "all product" })
    } catch (error) {
        console.log(error);
    }

});
// get user by id

productRouter.get("/:id", async (req, res) => {
    try {

        let result = await Product.findById(req.params.id);
        res.send({ user: result, msg: "one users" })
    } catch (error) {
        console.log(error);
    }
});

//delete product
productRouter.delete("/:id", async (req, res) => {
    try {

        let result = await Product.findByIdAndDelete(req.params.id);
        res.send({ msg: " product dead " })
    } catch (error) {
        console.log(error);
    }
});



//update product

productRouter.put("/:id", async (req, res) => {
    try {

        let result = await Product.findByIdAndUpdate(
            { _id: req.params.id }, { $set: { ...req.body } }
        );
        res.send({ msg: " product updated " })
    } catch (error) {
        console.log(error);
    }
});



module.exports = productRouter;