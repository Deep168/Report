<?php
include_once 'database.php';
if(isset($_POST['save']))
{	 
	 $name = $_POST['name'];
	 $email = $_POST['email'];
	 $mobile = $_POST['mobile'];
	 $gender = $_POST['gender'];
     $hobbies = $_POST['hobbies'];
     $country = $_POST['country'];
	 $sql = "INSERT INTO student (name,email,mob,gender,hobbies,country)
	 VALUES ('$name','$email','$mobile','$gender','$hobbies','$country')";
	 if (mysqli_query($conn, $sql)) {
		echo "New record created successfully !";
	 } else {
		echo "Error: " . $sql . "
" . mysqli_error($conn);
	 }
	 mysqli_close($conn);
}
?>