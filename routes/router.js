const express = require("express");
const router = express.Router();
const Product = require("../models/Product");


// router.get("/", (req, res) => {
//     console.log("Connect");

// });

router.post("/product", async (req, res) => {
    // console.log(req.body);
    const {product_name, price,quantity, stock} = req.body;

    if(!product_name ||  !price || !quantity ||  !stock) {
        res.status(404).send("Plz fill the data")
    }
    try {
        const predata = await Product.findOne({product_name:product_name });
        console.log(predata);
    
        if(predata) {
            res.status(404).send("Product is Already Present") 
        }else {
            const addProduct = new Product({
                product_name, price,quantity, stock
            });
            await addProduct.save();
            res.status(201).json(addProduct);
            console.log(addProduct);
        }
        
    } catch (error) {
        res.status(404).send(error) 
    }
})


// Get Product

router.get("/getproduct", async(req, res) => {
    try {
        const productdata = await Product.find();
        res.status(201).json(productdata);
        console.log(productdata);
    } catch (error) {
        res.status(404).json(error);
    }
})

// Get Individual Data
router.get("/getproduct/:id", async(req, res) => {
    try {
        console.log(req.params);
        const {id} = req.params;

        const individualProduct = await Product.findById({_id:id});
        console.log(individualProduct);
        res.status(201).json(individualProduct)

    } catch (error) {
        res.status(401).json(error)
    }
})
// Update Product
router.patch("/updateproduct/:id", async(req, res) => {
    try {
        const {id} = req.params;

        const updateproduct = await Product.findByIdAndUpdate(id, req.body,{
            new:true
        });
        console.log(updateproduct);
        res.status(201).json(updateproduct);
    } catch (error) {
        res.status(422).json(error)
    }
})


router.delete("/deleteproduct/:id", async (req, res) => {
    try {
        const {id} = req.params;

        const deleteproduct = await Product.findByIdAndDelete({_id:id})
        console.log(deleteproduct);
        res.status(201).json(deleteproduct);
    } catch (error) {
        res.status(422).json(error)
    }
})


module.exports = router;