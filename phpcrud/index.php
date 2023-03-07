<?php
include_once 'config.php';
$result = mysqli_query($conn,"SELECT * FROM student");
?>
<!DOCTYPE html>
<html>
 <head>
 <title> User data</title>
 

 </head>
<body>
<?php
if (mysqli_num_rows($result) > 0) {
?>
  <table>
  
  <tr>
    <td> Name</td>
    <td>Email</td>
    <td>Mobile</td>
    <td>Gender</td>
    <td>Hobbies</td>
    <td>Country</td>
  </tr>
<?php
$i=0;
while($row = mysqli_fetch_array($result)) {
?>
<tr>
    <td><?php echo $row["name"]; ?></td>
    <td><?php echo $row["email"]; ?></td>
    <td><?php echo $row["mobile"]; ?></td>
    <td><?php echo $row["gender"]; ?></td>
    <td><?php echo $row["hobbies"]; ?></td>
    <td><?php echo $row["country"]; ?></td>
</tr>
<?php
$i++;
}
?>
</table>
 <?php
}
else{
    echo "No result found";
}
?>
 </body>
</html>