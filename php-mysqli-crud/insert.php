<?php 
//Databse Connection file
include('dbconnection.php');
if(isset($_POST['submit']))
  {
  	// getting the post values
    $fname=$_POST['fname'];
    $lname=$_POST['lname'];
    $contno=$_POST['contactno'];
    $email=$_POST['email'];
	$gender=$_POST['gender'];
	$hobbies=$_POST['hobbies'];
	$pic = $_POST['pic'];
	$new=implode(",",$hobbies);
    $add=$_POST['address'];

$target = "/PHP/upload/"; 
$target = $target . basename( $_FILES['photo']['name']); 

//This gets all the other information from the form 
$pic = ($_FILES['photo']['name']); 

//Writes the photo to the server 
if (move_uploaded_file($_FILES['photo']['tmp_name'], $target)) { 
    //Tells you if its all ok 
    echo "The file ". basename( $_FILES['photo']['name']). " has been uploaded, and your information has been added to the directory"; 
} else { 
    //Gives an error if its not 
    echo "Sorry, there was a problem uploading your file.";
} 


  
    $query=mysqli_query($con, "insert into tblusers(FirstName,LastName, MobileNumber, Email,Gender,hobbies,image, Address) value('$fname','$lname', '$contno', '$email','$gender', '$new','$pic','$add' )");
    if ($query) {
    echo "<script>alert('You have successfully inserted the data');</script>";
    echo "<script type='text/javascript'> document.location ='index.php'; </script>";
  }
  else
    {
      echo "<script>alert('Something Went Wrong. Please try again');</script>";
    }

	


}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700">
<title>PHP Crud Operation!!</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

</head>
<body>
<div class="signup-form">
    <form  method="POST">
		<h2>Fill Data</h2>
		<p class="hint-text">Fill below form.</p>
        <div class="form-group">
			<div class="row">
				<div class="col"><input type="text" class="form-control" name="fname" placeholder="First Name" ></div><br>
				<div class="col"><input type="text" class="form-control" name="lname" placeholder="Last Name" ></div><br>
			</div>        	
        </div><br>
        <div class="form-group">
            <input type="text" class="form-control" name="contactno" placeholder="Enter your Mobile Number"  maxlength="10" pattern="[0-9]+">
        </div><br>
        <div class="form-group">
        	<input type="email" class="form-control" name="email" placeholder="Enter your Email id" >
        </div><br>
		<div>
		Gender:
<input type="radio" name="gender"
<?php if (isset($gender) && $gender=="female") echo "checked";?>
value="female">Female
<input type="radio" name="gender"
<?php if (isset($gender) && $gender=="male") echo "checked";?>
value="male">Male
		</div><br>
<div>Programming<input  type="checkbox" name="hobbies[]" value="programming"/>
			Coding<input type="checkbox" name="hobbies[]" value="coding"/>
			Editing<input type="checkbox" name="hobbies[]" value="editing"/>
		</div><br>
		<div>
			<br>
			<input type="file" name ="photo" id="inputImage" accept="image/*">
  
		</div><br>
		<div class="form-group">
            <textarea class="form-control" name="address" placeholder="Enter Your Address" ></textarea>
        </div><br>        
      
		<div class="form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block" name="submit">Submit</button>
        </div>
    </form>
	<div class="text-center">View Aready Inserted Data!!  <a href="index.php">View</a></div>
</div>
</body>
</html>