//TA03 PLACEHOLDER
const fs = require("fs");
const express = require('express');
const path = require("path");
const router = express.Router();

const ItemPath = path.join(require.main.path, "data", "Items.json");

router.get('/', (req, res, next) => {

    let search = req.query.search;
    //console.log(search);

    fs.readFile(ItemPath, (error, fileContent) => {
        let itemList = [];

        if (error) {
            console.log("Error reading file");
        } else {
            itemList = JSON.parse(fileContent);
        }

        if (search != undefined && search != "") {
            //itemList = itemList.filter(item => item.tags.includes(search));
            itemList = itemList.filter(item => item.tags.includes(search));
        }

        res.render('pages/ta03', {
            title: 'Team Activity 03',
            path: '/ta03', // For pug, EJS
            items: itemList
        });
    });



});

module.exports = router; //hiya from dana