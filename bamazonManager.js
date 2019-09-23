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
    if(err) throw err;
    choice(); 
});

function choice() {
    inquirer.prompt({
        name: "pick",
        type: "list",
        message: "What would you like to do?",
        choices: [
                    "View Products for Sale", 
                    "View Low Inventory",
                    "Add to Inventory",
                    "Add New Product",
                    "Quit"
                ]
    })
    .then(function(answer) {
        switch (answer.pick) {
            case "View Products for Sale":
                viewProduct();
                break;
            case "View Low Inventory":
                viewInventory();
                break;
            case "Add to Inventory":
                addInventory();
                break;
            case "Add New Product":
                addProduct();
                break;
            case "Quit":
                quit();
                break;

        }
    });
};

function viewProduct() {
    
    var query = "select * from product";
    connection.query(query, function(err, res) {
        if(err) throw err;

        var table = new Table({
            head: ["ITEM_ID", "PRODUCT_NAME", "DEPARTMENT_NAME", "PRICE", "STOCK_QUANTITY"]
        });
        for(var i = 0; i < res.length; i++) {
            table.push(
            [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
       );
        };
        console.log(table.toString());

        choice();
    })
};

function viewInventory() {
    var query = "SELECT * from product where stock_quantity < 20";
    connection.query(query, function (err, res) {
        var table = new Table ({
            head: ["ITEM_ID", "PRODUCT_NAME", "DEPARTMENT_NAME", "PRICE", "STOCK_QUANTITY"]
        });
        for (var i =0; i <res.length; i++) {
            table.push (
                [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
            )
        };

        console.log(table.toString());

        choice();
    })
};

function addInventory() {
    var query = "select * from product";
    connection.query(query, function(err, res) {
        if(err) throw err;

        var table = new Table({
            head: ["ITEM_ID", "PRODUCT_NAME", "DEPARTMENT_NAME", "PRICE", "STOCK_QUANTITY"]
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
                message: "What is the ID of the item you would like to add?",
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
                message: "How many would you like to add?",
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
            
            var query = "UPDATE product set ? where ?";
            connection.query(query, [{stock_quantity: (res[arrNum].stock_quantity + quantity)}, {item_id: product}], function(err,res) {
                if(err) throw err;
                console.log("Inventory Added!");

                choice();
            });

        });

        
    });
    

};

function addProduct() {
    inquirer.prompt([
        {
            name: "product",
            type: "input",
            message: "What is the name of the product you would like to add?"
        },
        {
            name: "dept",
            type: "list",
            message: "Which department does this product fall into?",
            choices: ["Toys & Games", "Food & Grocery", "Health & Beauty", "Office Product", "Household Product"]
        },
        {
            name: "price",
            type: "input",
            message: "How much does it cost?"
        },
        {
            name: "stock",
            type: "input",
            message: "How many do we have?",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }
    ]).then(function(answer) {
        var query = "INSERT INTO product SET ?";
        connection.query(query, {product_name: answer.product, department_name: answer.dept
        , price: answer.price, stock_quantity: answer.stock}, function(err,res) {
            
            if(err) throw err;
            console.log("New product is added!");

            choice();
        });
    })


};

function quit() {
    console.log("Good-Bye!");
    connection.end();
}