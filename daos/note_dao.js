var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'ccnote'
});

var dao = {
    create : function(noteName, content) {
        var createSql = 'insert into note(name, content) values(?, ?)';
        connection.query(createSql, ['noteI','content'],function(err, rows, fields){
            if (err != null) {
                console.log('error! please try again.');
            } else {
                console.log('create successful');
            }
        });
    },
    show : function(callback) {
        var showSql = 'select nid, name, content from note';
        connection.query(showSql, function(err, rows, fields) {
            if (err != null) {
                console.log('error! please try again.');
            } else {
                callback(rows);
            }
        });
    }
}

module.exports = dao;
