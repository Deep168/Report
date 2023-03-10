<?php
//Databse Connection file
include('dbconnection.php');

// $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// var_dump($_POST);
// var_dump($_FILES);
// die();
$hobbies=$gender="";
if (isset($_POST['submit'])) {
  // getting the post values
  $fname=$_POST['fname'];
  $lname=$_POST['lname'];
  $contno=$_POST['contactno'];
  $email=$_POST['email'];
  $gender=$_POST['gender'];
  $hobbies=$_POST['hobbies'];

  $new=implode(",",$hobbies);
    $add=$_POST['address'];

  if (isset($_FILES["image"]["name"])) {
    echo "hello";
    // var_dump($_FILES["image"]["name"]);
    
    // die();
    $target_dir = "/xampp/htdocs/php-mysqli-crud/images/";
    $target_file = $target_dir . basename($_FILES["image"]["name"]);
    $target_file1 =" /php-mysqli-crud/images/". basename($_FILES["image"]["name"]);
    var_dump($target_file);
    if(move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)){
        // echo "<script>alert('You have successfully inserted the data');</script>";
    }
  }




  $query=mysqli_query($con, "insert into tblusers(FirstName,LastName, MobileNumber, Email,Gender,hobbies,image, Address) value('$fname','$lname', '$contno', '$email','$gender', '$new','$target_file1','$add' )");
  // var_dump($query);
  // die();
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
    <form method="POST" enctype = "multipart/form-data" action="<?php echo  $_SERVER["PHP_SELF"]; ?>">
      <h2>Fill Data</h2>
      <p class="hint-text">Fill below form.</p>
      <div class="form-group">
        <div class="row">
          <div class="col"><input type="text" class="form-control" name="fname" placeholder="First Name"></div><br>
          <div class="col"><input type="text" class="form-control" name="lname" placeholder="Last Name"></div><br>
        </div>
      </div><br>
      <div class="form-group">
        <input type="text" class="form-control" name="contactno" placeholder="Enter your Mobile Number" maxlength="10" pattern="[0-9]+">
      </div><br>
      <div class="form-group">
        <input type="email" class="form-control" name="email" placeholder="Enter your Email id">
      </div><br>
      <div>
        Gender:
        <input type="radio" name="gender"  value="female">Female
        <input type="radio" name="gender"  value="male">Male
      </div><br>
      <div>
        Programming<input type="checkbox" name="hobbies[]" value="programming" />
        Coding<input type="checkbox" name="hobbies[]" value="coding" />
        Editing<input type="checkbox" name="hobbies[]" value="editing" />
      </div><br>

      <div>
        <div class="form-group">
          <input type="file" class="form-control" id="image" name="image">
        </div>
      </div>

      <div class="form-group">
        <textarea class="form-control" name="address" placeholder="Enter Your Address"></textarea>
      </div><br>

      <div class="form-group">
        <button type="submit" class="btn btn-success btn-lg btn-block" name="submit">Submit</button>
      </div>
    </form>
    <div class="text-center">View Aready Inserted Data!! <a href="index.php">View</a></div>
  </div>
</body>

</html>