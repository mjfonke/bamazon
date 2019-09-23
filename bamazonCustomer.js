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
        var table = new Table({
            head: ["ITEM_ID", "PRODUCT_NAME", "DEPARTMENT_NAME", "PRICE", "STOCK_QUANTITY"],
        });
        for(var i = 0; i < res.length; i++) {
            table.push(
            [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
       );
        };
        console.log(table.toString());
   
    inquirer.prompt([
        {
        name: "id",
        type: "input",
        message: "What is the ID of the item you would like to purchase? [Quit with Q]",
        validate: function(value) {
            if (isNaN(value) === false) {
                return true;
            }
            return false;
        }
        },

        {
            name: "units",
            type: "input",
            message: "How many would you like to purchase?[Q for Quit]",
            validate: function(value) {
                if (isNaN(value) === false) {   
                 return true;
                }
                return false;
            }
        }
    ]).then(function(answer) {
            var arrNum = parseInt(answer.id - 1);
            var product = answer.id;
            var quantity = parseInt(answer.units);
            var totalPrice = parseFloat((res[arrNum].price * quantity));

            if (quantity > res[arrNum].stock_quantity) {
                console.log("Sorry! We do not have enough item in our stock. Please check our stock_quantity again!");
                prompt();
            }

            else {var query = "UPDATE product set ? where ?";
            connection.query(query, [{stock_quantity: (res[arrNum].stock_quantity - quantity)}, {item_id: product}], function(err, res) {
                
                if(err) throw err;
            console.log("Your total price is $" + totalPrice + ". Thank you for your purchase!")

            prompt();
            
            });
            }
    });

    });
    
};


function prompt() {

    inquirer.prompt(
        {
            name: "yesno",
            type: "list",
            message: "Would you like to purchase another items?",
            choices: ["YES", "NO"]
        }
    ).then(function(answer) {
        if (answer.yesno === "YES") {
            list();
        } else {
            console.log("Good Bye!")
            connection.end();
        }
    });
};