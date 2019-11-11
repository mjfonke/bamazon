var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

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
            "View Product Sales by Department",
            "Create New Department",
            "Quit"
        ]
    }).then(function(answer) {
        switch (answer.pick) {
            case "View Product Sales by Department":
                viewSales();
                break;
            case "Create New Department":
                createNew();
                break;
            case "Quit":
                quit();
                break;
        }
    });
};

function viewSales() {
    var query = "select department_id, departments.department_name, over_head_costs, sum(product_sales) as product_sales"
    query += " from departments"
    query += " left join product"
    query += " on departments.department_name = product.department_name"
    query += " group by department_id"

    connection.query(query, function(err,res) {
        if(err) throw err;

        var table = new Table({
            head: ["DEPT_ID", "DEPT_NAME", "OVER_HEAD_COST", "PRODUCT_SALES", "TOTAL_PROFIT"]
        });

        for (var i =0; i <res.length; i++) {

            table.push(
                [res[i].department_id, res[i].department_name, res[i].over_head_costs, res[i].product_sales, (res[i].product_sales - res[i].over_head_costs)]
            );
        };
        console.log(table.toString());

        choice();
    })
};

function createNew() {
    inquirer.prompt([
        {
            name: "dept",
            type: "input",
            message: "What is the name of the department you would like to add?"
        },
        {
            name: "overhead",
            type: "input",
            message: "What is the overhead for this department you are adding?",
            validate: function(value) {
                if(isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }
    ]).then(function(answer) {
        var query = "INSERT INTO departments SET ?";
        connection.query(query, {department_name: answer.dept, over_head_costs: answer.overhead}, function(err,res) {
                if(err) throw err;
                console.log("New Department is added!");

                choice();
            });
    })
};

function quit() {
    console.log("Good - Bye !");
    connection.end();
}