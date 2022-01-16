//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const userArray = ["Bob", "Joe", "Betty"];

let error = "";

router.post('/removeUser', (req, res, next) => {
    const deleteUser = req.body.removeUser;
    const index = userArray.indexOf(deleteUser);
    if (index !== -1) {
        userArray.splice(index, 1);
        error = "";
    } else {
        error = "Person not found, try again!";
    }
    res.redirect('/ta02/');
});

router.post('/addUser', (req, res, next) => {
    const newUser = req.body.newUser;
    userArray.push(newUser);
    const index = userArray.indexOf(newUser);
    if (index !== -1) {
        error = "Person already exists!";
    } else {
        userArray.splice(index, 1);
    }
    res.redirect('/ta02/');
});

router.get('/', (req, res, next) => {
    res.render('pages/ta02', {
        title: 'Team Activity 02',
        path: '/ta02', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        users: userArray,
        errorMessage: error,
    });
    next();
});

module.exports = router;