CREATE TABLE Employee
(
Employee_id INT identity(1,1),
First_name VARCHAR(100) NOT NULL,
Last_name VARCHAR(100) NOT NULL,
Joining_Date DATE NOT NULL,
PRIMARY KEY(Employee_id )

);


INSERT INTO Employee
(First_name ,Last_name , Joining_Date )
VALUES
('Sayantan', 'Majumdar', '2000-01-11'),
('Anushka', 'Samanta', '2002-11-10' ),
('Sayan', 'Sharma', '2005-06-11' ),
('Shayari', 'Das', '2008-01-21' ),
('Sayani', 'Jain', '2008-02-01' ),
('Tapan', 'Samanta', '2010-01-11' ),
('Deepak', 'Sharma', '2014-12-01'  ),
('Ankana', 'Jana', '2018-08-17'),
('Shreya', 'Ghosh', '2020-09-10') ;
select * from Employee;

create PROCEDURE getEmpployeedata

AS

BEGIN

    select * from Employee;

END

getEmpployeedata


CREATE PROCEDURE getEmployeedata
@Employee_id int,
@name1 char(50) OUT
AS
BEGIN
select @name1=First_name from Employee where Employee_id = @Employee_id;
END
DECLARE @name1 char(50)

exec getEmployeedata 2,@name1 out;

print @name1

CREATE PROC sp
  AS
BEGIN
  select * from Employee
  END

 

-- => call a procedure  
Exec sp


 CREATE PROC sp2
  @Employee_id  INT
AS
  BEGIN
   select First_name from Employee where Employee_id=5
   END
  EXEC SP2 7  


CREATE TABLE Employee1
(
Employee_id INT ,
First_name VARCHAR(100) NOT NULL,
Last_name VARCHAR(100) NOT NULL,
Joining_Date DATE NOT NULL,
PRIMARY KEY(Employee_id )

);

 INSERT INTO Employee1
(Employee_id,First_name ,Last_name , Joining_Date )
VALUES
(1,'Sayantan', 'Majumdar', '2000-01-11'),
(2,'Anushka', 'Samanta', '2002-11-10' ),
(3,'Sayan', 'Sharma', '2005-06-11' ),
(4,'Shayari', 'Das', '2008-01-21' ),
(5,'Sayani', 'Jain', '2008-02-01' ),
(6,'Tapan', 'Samanta', '2010-01-11' ),
(7,'Deepak', 'Sharma', '2014-12-01'  ),
(8,'Ankana', 'Jana', '2018-08-17'),
(9,'Shreya', 'Ghosh', '2020-09-10') ;


  select * from Employee1;


Insert

create procedure  spinsert6
@Employee_id int,
@First_name VARCHAR(20),
@Last_name VARCHAR(20),
@Joining_Date Date
AS 
BEGIN
insert into Employee1 VALUES
(@Employee_id  ,@First_name ,@Last_name, @Joining_Date )
END
exec spinsert6 10,'sky','Patel','2022-9-5'

Delete
 create procedure  spdelete
@Employee_id int

AS 
BEGIN
delete from Employee1  where Employee_id=@Employee_id
END
exec spdelete 10
 
-- Update
create procedure  spupdate1
@Employee_id int,
@First_name VARCHAR(20),
@Last_name VARCHAR(20),
@Joining_Date Date
AS 
BEGIN
update table  Employee1 set First_name=@First_name, Last_name=@Last_name,Joining_Date=@Joining_Date where Employee_id=@Employee_id
END
exec spupdate1  10, 'sky','Patel','2022-9-5';

 


