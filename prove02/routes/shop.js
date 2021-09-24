const path = require('path');

const express = require('express');
const adminData = require('./admin')

const router = express.Router();


router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true,

    });
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    //Using path.join will provide us the option to use the paths on both linux and windows systems. 
});

module.exports = router;