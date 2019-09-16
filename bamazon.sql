drop database if exists bamazon;

create database bamazon;

use bamazon;

create table product (
    item_id int not null auto_increment,
    product_name varchar(100) not null,
    department_name varchar(100) null,
    price decimal(100,2) null,
    stock_quantity int null,
    primary key(item_id)
);

insert into product (product_name, department_name, price, stock_quantity)
values ("Potato Chips" , "Food", 3.99, 50), ("Pencil", "Office Supplies", 2.99, 100)
,("Beer", "Beverage", 7.99, 80), ("Lotion", "Beauty", 10.99, 20), ("Water", "Beverage", 2.99, 70)
,("Band-Aid", "Heath", 5.99, 70), ("NoteBook", "Office Supplies", 3.99, 10)
,("Gummy Bear", "Food", 3.99, 20), ("Chocolate", "Food", 4.99, 50), ("Candy", "Food", 2.99, 10);


