//TA03 PLACEHOLDER
const fs = require('fs');

const express = require('express');
const router = express.Router();

const items = [];

const data = require('../TeamAct3/data');

/*fs.readFile('./TeamAct3/data.json', (err, data) => {
    if (err) {
        items = err;
    } else {
        data = JSON.parse(data);
        for (let i = 0; i < 10; i++) {
            items.push(data[i]);

        }
    }
    console.log(items);
});*/

router.get('/', (req, res, next) => {
    fs.readFile('./TeamAct3/data.json', (err, data) => {
        if (err) {
            items = err;
        } else {
            data = JSON.parse(data);
            for (let i = 0; i < 10; i++) {
                items.push(data[i]);

            }
        }

    });
    res.render('pages/ta03', {
        title: 'Team Activity 03',
        path: '/ta03', // For pug, EJS
        items: items, //
    });
});

router.post('/', (req, res, next) => {
    const searchResults = req.body.searchTag;
    console.log(searchResults);
    fs.readFile('./TeamAct3/data.json', (err, data) => {
        if (err) {
            items = err;
        } else {
            data = JSON.parse(data);
            for (let i = 0; i < 10; i++) {
                items.push(data[i]);

            }
        }

    });
    const itemList = items.map(searchproduct);
    if (itemList) {
        res.render('pages/ta03', {
            title: 'Team Activity 03',
            path: '/ta03', // For pug, EJS
            items: itemList, //
        });
    } else {
        return res.redirect('/');
    }

});

module.exports = router;