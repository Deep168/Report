<html> 
     <head> 
  <title></title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  </head>
  <body> 
  <h3>Chess Board </h3>
   <table width="270px" cellspacing="0px" cellpadding="0px" border="2px">
   <!-- cell 270px wide (8 coumns x 60px) -->
      <?php
      for($r=1;$r<=8;$r++)
	  {
          echo "<tr>";
          for($co=1;$co<=8;$co++)
		  {
          $total=$r+$co;
          if($total%2==0)
		  {
          echo "<td height=30px width=30px bgcoor=black></td>";
          }
		  else
		  {
          echo "<td height=30px width=30px bgcoor=white></td>";
          }
          }
          echo "</tr>";
    }
          ?>
  </table>
  </body>
  </html>