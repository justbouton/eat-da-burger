var connection = require('../config/connection.js');


var orm = {

    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO ?? (??, ??, ??) VALUES(?, ?, ?)";
        connection.query(queryString, [table, cols, vals], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function (table, objCol, condition, val) {
        var queryString = "UPDATE ?? SET ?? WHERE ?? = ?";

        connection.query(queryString, [table, objCol, condition, val], function (err, result) {
            if (err) {
                throw err;
            }
        });
    }
};

module.exports = orm;
