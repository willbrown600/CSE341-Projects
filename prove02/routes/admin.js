const path = require('path'); //use path module to access path.join()

const express = require('express');

const router = express.Router();

const products = [];

const errorMessage = "This product does not exist.";

// /admin/add-product=>GET
router.get('/add-product', (req, res, next) => {
    res.render('add-product', { //use render to use view engine
        pageTitle: 'Add Product',
        path: '/admin/add-product', //object details TO  be                              passed into the object
        activeAddProduct: true,

    });

    /*res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');*/

    //next(); // Allows the request to continue to the next middleware in line.
    //use(); // you can also use get(),post(),patch() etc. It is just filtering. Use() is universal.
});

router.post('/add-product', (req, res, next) => {
    products.push({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description
    });
    res.redirect('/');
});

router.post('/remove-product', (req, res, next) => {
    const remTitle = req.body.title;
    const remPrice = req.body.price;
    const remDescription = req.body.description;
    const arrayTitle = products.indexOf(remTitle);
    const arrayPrice = products.indexOf(remPrice);
    const arrayDescription = products.indexOf(remDescription);

    products.splice(arrayTitle, 1);
    products.splice(arrayPrice, 1);
    products.splice(arrayDescription, 1)

    /*else {
        res.render(errorMessage);
    }*/
    res.redirect('/')
})

exports.routes = router;
exports.products = products;