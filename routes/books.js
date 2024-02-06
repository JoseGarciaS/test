const testCtr = require("../controllers/test")
var express = require('express');
var router = express.Router();


router.get('/get', testCtr.get);
router.post('/create', testCtr.create);
router.put('/updateById', testCtr.updateById);
router.delete('/deleteById', testCtr.deleteById);

module.exports = router;