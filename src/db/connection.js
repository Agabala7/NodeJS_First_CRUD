const mysql = require("mysql");

const connection = mysql.createConnection({
    host : "localhost",
    database : "nodejs_crud",
    user : "root",
    password : "",
    dateStrings : true,
});

connection.connect(error => {
    if(error) throw error;

    console.log("Connection Success");
});

module.exports = connection;