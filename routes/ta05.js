const express = require('express');
const router = express.Router();

const ta05Controller = require('/controller/ta05');



router.post('/style', ta05Controller.postStyle);

router.post('/counter', ta05Controller.postCounter);

router.post('/reset', ta05Controller.postReset);

router.get('/', ta05Controller.getIndex);

module.exports = router;