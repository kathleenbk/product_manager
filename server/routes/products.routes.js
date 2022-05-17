const ProductController = require('../controllers/products.controller');

module.exports = (app) => {
    app.get('/api/products', ProductController.getAllProducts);
    app.post('/api/products/new', ProductController.createProduct);
    app.delete('/api/products/delete/:_id', ProductController.deleteProduct);
};