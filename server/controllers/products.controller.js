const Product = require("../models/products.model");


// Get all products
const getAllProducts = (req, res) => {
    Product.find()
    .then((allProducts) => {
        res.json(allProducts)
    })
    .catch((err) => {
        console.log(err)
    })
};


// Create Product
const createProduct = (req, res) => {
    const {body} = req;
    Product.create(body)
    .then((newProduct) => {
        res.json(newProduct)
    })
    .catch((err) => {
        console.log(err)
    })
};

// Delete Product
const deleteProduct = (req, res) => {
    const {params} = req;
    Product.deleteOne({_id: params._id})
    .then((result) => res.json(result))
    .catch((err) => {
        console.log(err);
    })
};

module.exports = {
    getAllProducts,
    createProduct,
    deleteProduct,
}