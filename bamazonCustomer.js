var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "miranjang9507",
    database: "bamazon"
});

connection.connect(function(err) {
    if(err) throw(err);
    list();
});

function list() {
    var query = "select * from product";
    connection.query(query, function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(
                "Item_Id: " + res[i].item_id +
                "|| Product_Name: " + res[i].product_name +
                "|| Department_Name: "  + res[i].department_name +
                "|| Price: "
            )
        }
    })
}