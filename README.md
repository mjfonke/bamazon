# Bamazon
<hr>
Bamazon is an Amazon-like storefront app by using Node.js and MySQL.

## How it works
<hr>
Customer View

* Run "node bamazonCustomer.js" in your terminal
* Type the Item ID from the table that you would like to purchase 
* Type quantity that you would like to purchase
* If you want to buy another item, repeat. Other than that quit.

## Manager View
Manager view can get access to view product for sale , view low inventory, add inventory and add new product.

Run "node bamazonManager.js" in your terminal
* Select one from list whether you want to view products for sale, view low inventory, add to inventory or add new product.
* If you select view products for sale, you will see all the items for sales and their price and stock quantity.
* If you select low inventory you will get all the items that inventory is less than 20.
* If you select add to inventory, you will type Id of the item that you want to add more inventory in and can put quantity of the inventory you want to add.
*  If you select add new product, you will be able to type product name, price and stock quantity.


## Supervisor View
Supervisor view will have access to each department's overhead, product sales and total profit by each departments.

* Run "node bamazonSupervisor.js" in your terminal
* You can choose between viewing product sales by department or creating new department
* If you select view product sales by department, it will show each department's over head cost, product sales and total profits.
* If you select create new department, you can create new department name and set overhead.


