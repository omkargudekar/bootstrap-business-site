/**
 * Created by omkargudekar on 9/30/15.
 */
var express = require('express');
var router = express.Router();
var mysql      = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : ''
});


router.all('/', function(req, res) {
    console.log("Download Request Received : \n"+ req.body);
    var query = connection.query('INSERT INTO cmpe280.download_request SET ?', req.body, function(err, result) {
        if (err)
        {
            console.log("error" + err);

        }
        else
        {
            console.log("result" + result);

        }
    });
    console.log(query.sql);
    res.json(req.body);

});

module.exports = router;
