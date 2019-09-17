var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table")

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
        console.log("Working?")
        var table = new Table({
            head: ["ITEM_ID", "PRODUCT_NAME", "DEPARTMENT_NAME", "PRICE", "STOCK_QUANTITY"],
        });
        for(var i = 0; i < res.length; i++) {
            table.push(
            [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
       );
        };
        console.log(table.toString());

        buy();

    });
    
};

function buy() {
    inquirer.prompt({
        name: "id",
        type: "input",
        message: "What is the ID of the item you would like to purchase? [Quit with Q]"
    }).then(function(answer) {
        if (answer.id === "q") {
            console.log("Good-Bye!");
            connection.end();
        }
        if (answer.id === NaN) {
            console.log("Please Enter ID number you would like to purchase");
            return;
        } 
        // else {

        // }
    });



};