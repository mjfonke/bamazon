use bamazon;

SELECT * from product where stock_quantity < 20;

select  top_albums.year,
		top_albums.album, 
        top_albums.position,
        top5000.song,
        top5000.artist
from top_albums
inner join top5000 on (top5000.artist = "The Beatles" and top_albums.artist = "The Beatles")
order by top_albums.year;


select departments.department_id, departments.department_name, departments.over_head_costs
from product 
right join departments on departments.department_name = product.item_id;


use bamazon;

SELECT departments.department_id, departments.department_name, departments.over_head_costs, SUM(product.product_sales)
AS product_sales
FROM product
left JOIN departments ON departments.department_name = product.department_name

select artist, song, year from top5000 where artist in(
select artist from top5000 group by artist having count(artist) > 45) order by year desc;


select department_id, departments.department_name, over_head_costs, sum(product_sales) as product_sales,
sum(product_sales) - over_head_costs as total_profit
from departments
inner join product
on departments.department_name = product.department_name
group by department_id;


select department_id, departments.department_name, over_head_costs, sum(product_sales) as product_sales, sum(product_sales) - over_head_costs as total_profit
    from departments
   left join product
    on departments.department_name = product.department_name
  group by department_id;