<!-- Implement following PHP String and Array functions:
strtolower() 
explode()
strpos()
ucfirst()
substr()
array_merge()
array_rand()
array_slice()
array_merge_recursive()
array_reverse() -->
<html>
<body>
 <!-- strtolower() -->
<?php
echo strtolower("Hello WORLD.");
?>

<!-- explode() -->
<?php
$str = "Hello world. It's a beautiful day.";
print_r (explode(" ",$str));
?>

<!-- strpos() -->
<?php
echo strpos("I love php, I love php too!","php");
?>
  
  <!-- ucfirst() -->
  <?php
echo ucfirst("hello world!");
?>

<!-- array_merge() -->
<?php
$a1=array("red","green");
$a2=array("blue","yellow");
print_r(array_merge($a1,$a2));
?>

<!-- substr() -->
<?php
echo substr("Hello world",6);
?>

<!-- array_slice() -->
<?php
$a=array("red","green","blue","yellow","brown");
print_r(array_slice($a,2));
?>

<!-- array_rand() -->
<?php
$a=array("red","green","blue","yellow","brown");
$random_keys=array_rand($a,3);
echo $a[$random_keys[0]]."<br>";
echo $a[$random_keys[1]]."<br>";
echo $a[$random_keys[2]];
?>

<!-- array_reverse()  -->
<?php
$a=array("a"=>"Volvo","b"=>"BMW","c"=>"Toyota");
print_r(array_reverse($a));
?>

<!-- array_merge_recursive() -->
<?php
$a1=array("a"=>"red","b"=>"green");
$a2=array("c"=>"blue","b"=>"yellow");
print_r(array_merge_recursive($a1,$a2));
?>
</body>
</html>