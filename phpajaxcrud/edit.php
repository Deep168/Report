<?php 
//Database Connection
include('dbconnection.php');
if(isset($_POST['submit']))
  {
  	$eid=$_GET['editid'];
  	//Getting Post Values
    $fname=$_POST['fname'];
    $lname=$_POST['lname'];
    $contno=$_POST['contactno'];
    $email=$_POST['email'];
	$gender=$_POST['gender'];
	$hobbies=$_POST['hobbies'];
	$new=implode(",",$hobbies);
    $add=$_POST['address'];

    //Query for data updation
     $query=mysqli_query($con, "update  tblusers set FirstName='$fname',LastName='$lname', MobileNumber='$contno', Email='$email',Gender='$gender',hobbies='$new', Address='$add' where ID='$eid'");
     
    if ($query) {
    echo "<script>alert('You have successfully update the data');</script>";
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
 <?php
$eid=$_GET['editid'];
$ret=mysqli_query($con,"select * from tblusers where ID='$eid'");
 $row=mysqli_fetch_array($ret); 
 $hobbies=explode(',',$row['hobbies']);
?>
		<h2>Update </h2>
		<p class="hint-text">Update your info.</p>
        <div class="form-group">
			<div class="row">
				<div class="col"><input type="text" class="form-control" name="fname" value="<?php  echo $row['FirstName'];?>" required="true"></div>
				<div class="col"><input type="text" class="form-control" name="lname" value="<?php  echo $row['LastName'];?>" required="true"></div>
			</div>        	
        </div>
        <div class="form-group">
            <input type="text" class="form-control" name="contactno" value="<?php  echo $row['MobileNumber'];?>" required="true" maxlength="10" pattern="[0-9]+">
        </div>
        <div class="form-group">
        	<input type="email" class="form-control" name="email" value="<?php  echo $row['Email'];?>" required="true">
        </div>

		<div>
		<div class="form-group">
		Male<input value="male"  type="radio" name="gender"  <?php if($row['Gender']=="male"){echo "checked";}?>/>
			Female<input value="female" type="radio" name="gender" <?php if($row['Gender']=="female"){echo "checked";}?> />
			</td>
		</div>

		<div>Programming<input  type="checkbox" name="hobbies[]" <?= in_array('programming',$hobbies)?"checked" : " ";  ?> value="programming"/>
			Coding<input type="checkbox" name="hobbies[]" value="coding" <?= in_array('coding',$hobbies)?"checked" : " ";  ?>/>
			Editing<input type="checkbox" name="hobbies[]" value="editing" <?= in_array('editing',$hobbies)?"checked" : " ";  ?>/></div>

		
		<div class="form-group">
            <textarea class="form-control" name="address" required="true"><?php  echo $row['Address'];?></textarea>
        </div>        
    
		<div class="form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block" name="submit">Update</button>
        </div>
    </form>

</div>
</body>
</html>