//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const userList = ["Bob", "Harry", "Susan"];

router.post("/addUser", (request, response, next) => {

    userList.push(request.body.user);
    response.redirect("/ta02");

});

router.get("/addUser", (request, response, next) => {

    response.render("pages/ta02", {
        title: "Add User",
        path: '/ta02',
    });

});

router.get('/', (req, res, next) => {
    res.render('pages/ta02', {
        title: 'Team Activity 02',
        path: '/ta02', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        users: userList
    });
});



module.exports = router;