drop database if exists bamazon;

create database bamazon;

use bamazon;

create table product (
    item_id int not null auto_increment,
    product_name varchar(50) not null,
    department_name varchar(50) null,
    price decimal(4,2) null,
    stock_quantity int null,
    product_sales decimal(7,2) default 0,
    primary key(item_id)
);

insert into product (product_name, department_name, price, stock_quantity, product_sales)
values ("Mario Kart 8" , "Toys & Games", 50, 50, 12000), ("Play-doh", "Toys & Games", 1.99, 100, 700)
,("Coke", "Food & Grocery", 2.99, 80, 200), ("Water", "Food & Grocery", 2.99, 70, 5000), ("Eye Drop", "Health & Beauty", 10.99, 50, 8000)
,("Band-Aid", "Health & Beauty", 5.99, 70, 200), ("Sharpie", "Office Product", 3.99, 10, 3000)
,("GoldFish", "Food & Grocery", 3.99, 20, 400), ("Chocolate", "Food & Grocery", 4.99, 50, 2000), ("LifeSaver", "Food & Grocery", 2.99, 10, 1000)
,("Mario Party", "Toys & Games", 49.99, 30, 4300), ("Oxi Clean", "Household Product",  7.99, 10, 1200)
,("Sun Block", "Health & Beauty", 29.99, 30, 3000), ("Wound Care Kit", "Health & Beauty", 15.99, 15, 800), ("Kleenex", "Household Product", 9.99, 50, 1000);


use bamazon;

create table departments (
    department_id int not null auto_increment,
    department_name varchar(50) null,
    over_head_costs int null,
    primary key(department_id)
);

insert into departments (department_name, over_head_costs)
values("Toys & Games", 20000), ("Food & Grocery", 10000), ("Health & Beauty", 11000)
, ("Office Product", 7000), ("Household Product", 8000);

select * from product;
select * from departments;
