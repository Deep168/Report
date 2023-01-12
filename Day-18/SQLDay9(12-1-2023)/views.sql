create TABLE  student(
    Roil_no int,
    stu_name varchar(255),
    city varchar(255)
);
insert into student values(1,'deep','london'),(2,'Darshan','Delhi'),(3,'Jaydeepo','Gujrat'),(4,'smith','Up');
select * from student;

 sp_rename 'student.Roil_no', 'rollno', 'COLUMN';


create VIEW vwstudent
    AS
    SELECT * from student

select * from vwstudent;


create VIEW vstudent
    AS
    SELECT Roil_no,stu_name from student

    select * from vstudent;
alter table student add country varchar(255)
exec sp_refreshview vwstudent


create  table student1(
 rollno int not null,
   admitdate date not null, birthdate date not null,
    standard int not null, sex varchar(20) not null);
insert into student1 values(1,'2006-1-1','2001-9-5',8,'Male'),(2,'2006-1-1','2000-9-5',8,'Male'),(3,'2009-1-1','2001-5-9',10,'Male'),
(4,'2008-1-1','1999-7-1',11,'Male');

create view vw2student
AS
select * from student1;
  
select * from vw2student  

create view vw3student
AS
select student.rollno, student.stu_name,student1.sex,student1.standard from student  inner join student1 on  student.rollno=student1.rollno;
  
select * from vw3student  
drop view vwstudent;

create view vw4student
with SCHEMABINDING
AS
select rollno, city
 from student
-- rowlevel security
create view vw5student
AS
select * from student1 where  rollno >2;
select * from vw5student;
-- column level securituy
create view vw6student
AS
select rollno,stu_name from student ;
select * from vw6student
-- insert update delete from VIEW
create view vwdemo
AS
select * from student


insert into vwdemo(rollno,stu_name,city)values(10,'darshit','Goa');
delete from vwdemo where rollno=4 
update vwdemo set stu_name='Jay'where rollno=3
select * from vwdemo


create view vmdemo
AS
select * from student WHERE city='Delhi'
WITH CHECK OPTION
select * from vmdemo

insert into vmdemo(rollno,stu_name,city)values(12,'dixit','Delhi');
insert into vmdemo(rollno,stu_name,city)values(13,'daxit','Jaypur');
