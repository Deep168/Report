create table student3(
fname varchar(255) not null,
lname varchar(255) not null,
dob date not null,
address varchar(255));

insert into student3 values('Aman','Shah','1982-01-06','Bhopal');
insert into student3 values('Aman','Shah','1982-01-06','Bhopal');
insert into student3 values('Ravi','Yadav','1984-09-28','Maninagar');
insert into student3 values('Ravi','Yadav','1984-09-28','Maninagar');
select * from student3


with CTE as
(
select *, ROW_NUMBER() over (partition by fname order by fname) as rownumber
from student3
)
DELETE FROM CTE where rownumber>1

select * from student3
insert into 