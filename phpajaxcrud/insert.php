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
<meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  <link rel="stylesheet" href="./style.css">

</head>
<body>
<div class="signup-form">
    <form  method="POST">
		<h2>Fill Data</h2>
		<p class="hint-text">Fill below form.</p>
        <div class="form-group">
			<div class="row">
				<div class="col"><input type="text" class="form-control" id="fname" name="fname" placeholder="First Name" ></div><br>
				<div class="col"><input type="text" class="form-control" id="lname" name="lname" placeholder="Last Name" ></div><br>
			</div>        	
        </div><br>
        <div class="form-group">
            <input type="text" class="form-control"id="contactno" name="contactno" placeholder="Enter your Mobile Number"  maxlength="10" pattern="[0-9]+">
        </div><br>
        <div class="form-group">
        	<input type="email" class="form-control" id="email" name="email" placeholder="Enter your Email id" >
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
<script>
$(document).ready(function() {
$('#butsave').on('click', function() {
$("#butsave").attr("disabled", "disabled");
var name = $('#name').val();
var email = $('#email').val();
var phone = $('#phone').val();
var city = $('#city').val();
if(name!="" && email!="" && phone!="" && city!=""){
	$.ajax({
		url: "insert.php",
		type: "POST",
		data: {
			name: name,
			email: email,
			phone: phone,
			city: city				
		},
		cache: false,
		success: function(dataResult){
			var dataResult = JSON.parse(dataResult);
			if(dataResult.statusCode==200){
				$("#butsave").removeAttr("disabled");
				$('#fupForm').find('input:text').val('');
				$("#success").show();
				$('#success').html('Data added successfully !'); 						
			}
			else if(dataResult.statusCode==201){
				alert("Error occured !");
			}
			
		}
	});
	}
	else{
		alert('Please fill all the field !');
	}
});
});
</script>
</html>