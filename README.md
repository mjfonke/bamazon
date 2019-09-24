<h1>Bamazon
<hr>
<p>Bamazon is an Amazon-like storefront app by using Node.js and MySQL.

<h2>How it works
<hr>
<h3>Customer View

<li>Run "node bamazonCustomer.js" in your terminal
<li>Type the Item ID from the table that you would like to purchase 
<li>Type quantity that you would like to purchase
<li>If you want to buy another item, repeat. Other than that quit.

<h3>Manager View
<p> Manager view can get access to view product for sale , view low inventory, add inventory and add new product.

<li>Run "node bamazonManager.js" in your terminal
<li>Select one from list whether you want to view products for sale, view low inventory, add to inventory or add new product.
<li>If you select view products for sale, you will see all the items for sales and their price and stock quantity.
<li>If you select low inventory you will get all the items that inventory is less than 20.
<li>If you select add to inventory, you will type Id of the item that you want to add more inventory in and can put quantity of the inventory you want to add.
<li> If you select add new product, you will be able to type product name, price and stock quantity.


<h3>Supervisor View
<p> Supervisor view will have access to each department's overhead, product sales and total profit by each departments.

<li>Run "node bamazonSupervisor.js" in your terminal
<li>You can choose between viewing product sales by department or creating new department
<li>If you select view product sales by department, it will show each department's over head cost, product sales and total profits.
<li>If you select create new department, you can create new department name and set overhead.


