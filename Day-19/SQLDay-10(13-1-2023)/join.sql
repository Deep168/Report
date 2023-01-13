CREATE TABLE stores2 (
	store_id INT IDENTITY (1, 1) PRIMARY KEY,
	store_name VARCHAR (255) NOT NULL,
	phone VARCHAR (25),
	email VARCHAR (255),
	street VARCHAR (255),
	city VARCHAR (255),
	state VARCHAR (10),
	zip_code VARCHAR (5))

    CREATE TABLE categories1 (
	category_id INT IDENTITY (1, 1) PRIMARY KEY,
	category_name VARCHAR (255) NOT NULL
);

CREATE TABLE brands1 (
	brand_id INT IDENTITY (1, 1) PRIMARY KEY,
	brand_name VARCHAR (255) NOT NULL
);

CREATE TABLE products1 (
	product_id INT IDENTITY (1, 1) PRIMARY KEY,
	product_name VARCHAR (255) NOT NULL,
	brand_id INT NOT NULL,
	category_id INT NOT NULL,
	model_year SMALLINT NOT NULL,
	list_price DECIMAL (10, 2) NOT NULL,
	FOREIGN KEY (category_id) REFERENCES categories1 (category_id) ,
	FOREIGN KEY (brand_id) REFERENCES brands1 (brand_id) 
);

CREATE TABLE customers1 (
	customer_id INT IDENTITY (1, 1) PRIMARY KEY,
	first_name VARCHAR (255) NOT NULL,
	last_name VARCHAR (255) NOT NULL,
	phone VARCHAR (25),
	email VARCHAR (255) NOT NULL,
	street VARCHAR (255),
	city VARCHAR (50),
	state VARCHAR (25),
	zip_code VARCHAR (5)
);



CREATE TABLE staffs1 (
	staff_id INT IDENTITY (1, 1) PRIMARY KEY,
	first_name VARCHAR (50) NOT NULL,
	last_name VARCHAR (50) NOT NULL,
	email VARCHAR (255) NOT NULL UNIQUE,
	phone VARCHAR (25),
	active tinyint NOT NULL,
	store_id INT NOT NULL,
	manager_id INT,
	FOREIGN KEY (store_id) REFERENCES stores2 (store_id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (manager_id) REFERENCES staffs1 (staff_id) ON DELETE NO ACTION ON UPDATE NO ACTION
);



CREATE TABLE stocks1 (
	store_id INT,
	product_id INT,
	quantity INT,
	PRIMARY KEY (store_id, product_id),
	FOREIGN KEY (store_id) REFERENCES stores2 (store_id),
	FOREIGN KEY (product_id) REFERENCES products1 (product_id) 
);

INSERT INTO products1( product_name, brand_id, category_id, model_year, list_price) VALUES('Trek 820 - 2016',9,6,2016,379.99)
INSERT INTO products1( product_name, brand_id, category_id, model_year, list_price) VALUES('Ritchey Timberwolf Frameset - 2016',5,6,2016,749.99)
INSERT INTO products1( product_name, brand_id, category_id, model_year, list_price) VALUES('Surly Wednesday Frameset - 2016',8,6,2016,999.99)
INSERT INTO products1( product_name, brand_id, category_id, model_year, list_price) VALUES('Trek Fuel EX 8 29 - 2016',9,6,2016,2899.99)
INSERT INTO products1( product_name, brand_id, category_id, model_year, list_price) VALUES('Heller Shagamaw Frame - 2016',3,6,2016,1320.99)
INSERT INTO products1( product_name, brand_id, category_id, model_year, list_price) VALUES('Surly Ice Cream Truck Frameset - 2016',8,6,2016,469.99)
INSERT INTO products1( product_name, brand_id, category_id, model_year, list_price) VALUES('Trek Slash 8 27.5 - 2016',9,6,2016,3999.99)
INSERT INTO products1( product_name, brand_id, category_id, model_year, list_price) VALUES('Trek Remedy 29 Carbon Frameset - 2016',9,6,2016,1799.99)
INSERT INTO products1( product_name, brand_id, category_id, model_year, list_price) VALUES('Trek Conduit+ - 2016',9,5,2016,2999.99)
INSERT INTO products1( product_name, brand_id, category_id, model_year, list_price) VALUES('Surly Straggler - 2016',8,4,2016,1549)
INSERT INTO products1( product_name, brand_id, category_id, model_year, list_price) VALUES('Surly Straggler 650b - 2016',8,4,2016,1680.99)
INSERT INTO products1( product_name, brand_id, category_id, model_year, list_price) VALUES('Electra Townie Original 21D - 2016',1,3,2016,549.99)
INSERT INTO products1( product_name, brand_id, category_id, model_year, list_price) VALUES('Electra Cruiser 1 (24-Inch) - 2016',1,3,2016,269.99)
INSERT INTO products1( product_name, brand_id, category_id, model_year, list_price) VALUES('Electra Girl''s Hawaii 1 (16-inch) - 2015/2016',1,3,2016,269.99)
INSERT INTO products1( product_name, brand_id, category_id, model_year, list_price) VALUES('Electra Moto 1 - 2016',1,3,2016,529.99)
INSERT INTO products1( product_name, brand_id, category_id, model_year, list_price) VALUES('Electra Townie Original 7D EQ - 2016',1,3,2016,599.99)
INSERT INTO products1( product_name, brand_id, category_id, model_year, list_price) VALUES('Pure Cycles Vine 8-Speed - 2016',4,3,2016,429)
INSERT INTO products1( product_name, brand_id, category_id, model_year, list_price) VALUES('Pure Cycles Western 3-Speed - Women''s - 2015/2016',4,3,2016,449)
INSERT INTO products1( product_name, brand_id, category_id, model_year, list_price) VALUES('Pure Cycles William 3-Speed - 2016',4,3,2016,449)
INSERT INTO products1( product_name, brand_id, category_id, model_year, list_price) VALUES('Electra Townie Original 7D EQ - Women''s - 2016',1,3,2016,599.99)

INSERT INTO customers1(first_name, last_name, phone, email, street, city, state, zip_code) VALUES('Debra','Burks',NULL,'debra.burks@yahoo.com','9273 Thorne Ave. ','Orchard Park','NY',14127);
INSERT INTO customers1(first_name, last_name, phone, email, street, city, state, zip_code) VALUES('Kasha','Todd',NULL,'kasha.todd@yahoo.com','910 Vine Street ','Campbell','CA',95008);
INSERT INTO customers1(first_name, last_name, phone, email, street, city, state, zip_code) VALUES('Tameka','Fisher',NULL,'tameka.fisher@aol.com','769C Honey Creek St. ','Redondo Beach','CA',90278);
INSERT INTO customers1(first_name, last_name, phone, email, street, city, state, zip_code) VALUES('Daryl','Spence',NULL,'daryl.spence@aol.com','988 Pearl Lane ','Uniondale','NY',11553);
INSERT INTO customers1(first_name, last_name, phone, email, street, city, state, zip_code) VALUES('Charolette','Rice','(916) 381-6003','charolette.rice@msn.com','107 River Dr. ','Sacramento','CA',95820);
INSERT INTO customers1(first_name, last_name, phone, email, street, city, state, zip_code) VALUES('Lyndsey','Bean',NULL,'lyndsey.bean@hotmail.com','769 West Road ','Fairport','NY',14450);
INSERT INTO customers1(first_name, last_name, phone, email, street, city, state, zip_code) VALUES('Latasha','Hays','(716) 986-3359','latasha.hays@hotmail.com','7014 Manor Station Rd. ','Buffalo','NY',14215);
INSERT INTO customers1(first_name, last_name, phone, email, street, city, state, zip_code) VALUES('Jacquline','Duncan',NULL,'jacquline.duncan@yahoo.com','15 Brown St. ','Jackson Heights','NY',11372);
INSERT INTO customers1(first_name, last_name, phone, email, street, city, state, zip_code) VALUES('Genoveva','Baldwin',NULL,'genoveva.baldwin@msn.com','8550 Spruce Drive ','Port Washington','NY',11050);
INSERT INTO customers1(first_name, last_name, phone, email, street, city, state, zip_code) VALUES('Pamelia','Newman',NULL,'pamelia.newman@gmail.com','476 Chestnut Ave. ','Monroe','NY',10950);
INSERT INTO customers1(first_name, last_name, phone, email, street, city, state, zip_code) VALUES('Deshawn','Mendoza',NULL,'deshawn.mendoza@yahoo.com','8790 Cobblestone Street ','Monsey','NY',10952);

INSERT INTO stores2(store_name, phone, email, street, city, state, zip_code)
VALUES('Santa Cruz Bikes','(831) 476-4321','santacruz@bikes.shop','3700 Portola Drive', 'Santa Cruz','CA',95060),
      ('Baldwin Bikes','(516) 379-8888','baldwin@bikes.shop','4200 Chestnut Lane', 'Baldwin','NY',11432),
      ('Rowlett Bikes','(972) 530-5555','rowlett@bikes.shop','8000 Fairway Avenue', 'Rowlett','TX',75088);

   
INSERT INTO stocks1(store_id,  quantity) VALUES(1,27);
INSERT INTO stocks1(store_id,  quantity) VALUES(2,5);
INSERT INTO stocks1(store_id,  quantity) VALUES(3,6);
INSERT INTO stocks1(store_id,  quantity) VALUES(4,23);
INSERT INTO stocks1(store_id,  quantity) VALUES(5,22);
INSERT INTO stocks1(store_id,  quantity) VALUES(6,0);
INSERT INTO stocks1(store_id,  quantity) VALUES(7,8);
INSERT INTO stocks1(store_id,  quantity) VALUES(8,0);
INSERT INTO stocks1(store_id,  quantity) VALUES(9,11);
INSERT INTO stocks1(store_id,  quantity) VALUES(10,15);


INSERT INTO stocks1(store_id, product_id ,quantity) VALUES(1,1,27);
INSERT INTO stocks1(store_id,product_id , quantity) VALUES(1,2,5);
INSERT INTO stocks1(store_id, product_id, quantity) VALUES(1,3,6);
INSERT INTO stocks1(store_id,product_id,  quantity) VALUES(1,4,23);
INSERT INTO stocks1(store_id, product_id, quantity) VALUES(1,5,22);
INSERT INTO stocks1(store_id, product_id, quantity) VALUES(2,271,26);
INSERT INTO stocks1(store_id,product_id , quantity) VALUES(2,272,1);
INSERT INTO stocks1(store_id, product_id ,quantity) VALUES(2,273,28);
INSERT INTO stocks1(store_id,product_id, quantity) VALUES(2,274,15);


select * from stocks1

SET IDENTITY_INSERT staffs1 ON;  
INSERT INTO staffs1(staff_id, first_name, last_name, email, phone, active, store_id, manager_id) VALUES(1,'Fabiola','Jackson','fabiola.jackson@bikes.shop','(831) 555-5554',1,1,NULL);
INSERT INTO staffs1(staff_id, first_name, last_name, email, phone, active, store_id, manager_id) VALUES(2,'Mireya','Copeland','mireya.copeland@bikes.shop','(831) 555-5555',1,1,1);
INSERT INTO staffs1(staff_id, first_name, last_name, email, phone, active, store_id, manager_id) VALUES(3,'Genna','Serrano','genna.serrano@bikes.shop','(831) 555-5556',1,1,2);
INSERT INTO staffs1(staff_id, first_name, last_name, email, phone, active, store_id, manager_id) VALUES(4,'Virgie','Wiggins','virgie.wiggins@bikes.shop','(831) 555-5557',1,1,2);
INSERT INTO staffs1(staff_id, first_name, last_name, email, phone, active, store_id, manager_id) VALUES(5,'Jannette','David','jannette.david@bikes.shop','(516) 379-4444',1,2,1);
INSERT INTO staffs1(staff_id, first_name, last_name, email, phone, active, store_id, manager_id) VALUES(6,'Marcelene','Boyer','marcelene.boyer@bikes.shop','(516) 379-4445',1,2,5);
INSERT INTO staffs1(staff_id, first_name, last_name, email, phone, active, store_id, manager_id) VALUES(7,'Venita','Daniel','venita.daniel@bikes.shop','(516) 379-4446',1,2,5);
INSERT INTO staffs1(staff_id, first_name, last_name, email, phone, active, store_id, manager_id) VALUES(8,'Kali','Vargas','kali.vargas@bikes.shop','(972) 530-5555',1,3,1);
INSERT INTO staffs1(staff_id, first_name, last_name, email, phone, active, store_id, manager_id) VALUES(9,'Layla','Terrell','layla.terrell@bikes.shop','(972) 530-5556',1,3,7);
INSERT INTO staffs1(staff_id, first_name, last_name, email, phone, active, store_id, manager_id) VALUES(10,'Bernardine','Houston','bernardine.houston@bikes.shop','(972) 530-5557',1,3,7);
;



select store_id , store_name, product_id,product_name,b.brand_id,brand_name,customer_id,cus.first_name,ca.category_id,category_name
from stores2 as s inner join products1 as p  on s.store_id=p.product_id 
inner join brands1 as b on p.product_id=b.brand_id 
inner join customers1 as cus on b.brand_id=cus.customer_id
inner join categories1 as ca on cus.customer_id=ca.category_id
  

  