


 CREATE TABLE CUSTOMERS(
   ID   INT              NOT NULL,
   NAME VARCHAR (20)     NOT NULL,
   AGE  INT              NOT NULL,
   ADDRESS  CHAR (25) ,
   SALARY   DECIMAL (18, 2),
   PRIMARY KEY (ID)
);


INSERT INTO CUSTOMERS (ID,NAME,AGE,ADDRESS,SALARY)
VALUES (1, 'Ramesh', 32, 'Ahmedabad', 2000.00 );

INSERT INTO CUSTOMERS (ID,NAME,AGE,ADDRESS,SALARY)
VALUES (2, 'Khilan', 25, 'Delhi', 1500.00 );

INSERT INTO CUSTOMERS (ID,NAME,AGE,ADDRESS,SALARY)
VALUES (3, 'kaushik', 23, 'Kota', 2000.00 );

INSERT INTO CUSTOMERS (ID,NAME,AGE,ADDRESS,SALARY)
VALUES (4, 'Chaitali', 25, 'Mumbai', 6500.00 );

INSERT INTO CUSTOMERS (ID,NAME,AGE,ADDRESS,SALARY)
VALUES (5, 'Hardik', 27, 'Bhopal', 8500.00 );

INSERT INTO CUSTOMERS (ID,NAME,AGE,ADDRESS,SALARY)
VALUES (6, 'Komal', 22, 'MP', 4500.00 );
select * from CUSTOMERS;

Execute sp_helpindex CUSTOMERS;
-- CREATE NONCLUSTERED INDEX IX_CUSTOMERS_NAME ON CUSTOMERS(NAME) 
CREATE CLUSTERED INDEX ab_CUSTOMERS_AGE ON CUSTOMERS(AGE) 
drop index PK__CUSTOMER__3214EC27801BA17C from CUSTOMERS;


select NAME,  LAG(NAME) over(order by NAME) from CUSTOMERS order by NAME ASC ;
SELECT char_length('Hello!');

SELECT REPLACE('123geeks123', '123',456);

CREATE TABLE tab3 (
    Id INT PRIMARY KEY
);

INSERT INTO tab3 VALUES (1), (2), (3), (4);

CREATE TABLE tab4 (
    Id INT PRIMARY KEY
);

INSERT INTO tab4 VALUES (3), (4), (5), (6);


SELECT Id
FROM tab3
MINUS
SELECT Id
FROM tab4;

CREATE TABLE geek_demo (Name VARCHAR(10) );

INSERT INTO geek_demo (Name)
VALUES('A'), ('B'), ('B'), ('C'), ('C'), ('D'), ('E');





SELECT Name,
RANK () OVER (
ORDER BY Name
) AS Rank_no 
FROM geek_demo;

DATE '2012-05-29';

time '11:11:00'

SELECT GETDATE();

SELECT TIME();

SELECT TIME("2017-08-15 19:30:10.000001");

Create Procedure sumThree
@n1 int,
@n2 int,
@result int output as
Set @result = @n1+@n2
Declare @result int
Execute sumThree 5,30,@result output
Select @result

CREATE PROCEDURE Fibonacci4 @Num int
AS
BEGIN
	DECLARE 
		@Num1 int,
		@Num2 int,
		@Num3 int,
		@Counter int
	SET @Num1= 0
	SET @Num2= 1
	SET @Counter= 0
	SET @Num3=0
	PRINT('Fibonacci Series')
	PRINT(@Num1)
	PRINT(@Num2)
	WHILE @Counter < @Num -2
	BEGIN
		SET @Num3= @Num1 + @Num2
		PRINT(@Num3)
		SET @Counter = @Counter + 1
		SET @Num1 = @Num2
		SET @Num2 = @Num3
	END
END

EXEC Fibonacci4 4
