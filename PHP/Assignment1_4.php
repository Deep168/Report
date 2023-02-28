<!-- <?php
$a = $_POST['Enter your age'];
if ($a < "18") {
    echo "you are eligible for voting";
  }
  else {
    echo "you are not  eligible for voting";
  }
  ?> -->

<html>
<head>
   <title></title>
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
   </head>
   <body>
   <form method='POST'>
   <h2>Please Enter your age:</h2>
 <input type="number" name="age">
 <input type="submit" value="Submit">
 </form>
 <?php
 if (isset($_POST['submit'])) {

$a=$_POST['age'];

if($a>18){
    echo "<p>You are eligible for voting</p>?";

}
else
    echo "<p>You are eligible not for voting</p>?";
}
?>
</body>
</html>

Sample Output: