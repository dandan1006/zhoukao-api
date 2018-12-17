var mysql = require('mysql');
var config = {
    user: 'root',
    password: 'root',
    database: 'userlist',
    connectionLimit: 100
}
var pool = mysql.createPool(config);
module.exports = function(sql, query, fn) {
    fn = fn ? fn : query;
    query = query || [];
    pool.getConnection(function(err, con) {
        if (err) {
            fn(err)
        } else {
            con.query(sql, query, function(err, results) {
                con.release();
                queryCakk(err, results)
            })
        }
    })

    function queryCakk(err, results) {
        if (err) {
            fn(err)
        } else {
            fn(null, results)
        }
    }
}