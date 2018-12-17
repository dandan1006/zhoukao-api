var express = require('express');
var router = express.Router();
var query = require('../mysql');
var sql = require('../mysql/sql');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/api/get/train_tickets', function(req, res, next) {
    query(sql.SELECT_ALL, function(err, results) {
        if (err) {
            res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, msg: results })
        }
    })
})
module.exports = router;