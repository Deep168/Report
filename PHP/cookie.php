<!-- setcookie(cookie_name, cookie_value, [expiry_time], [cookie_path], [domain], [secure], [httponly]); -->
<?php
     setcookie("user_name", "Guru99", time()+ 86400,'/'); // expires after 60 seconds
     echo 'the cookie has been set for 1 day';

    
?>