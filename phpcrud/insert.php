<!DOCTYPE html>
<html>
<head>
	<title>Update - Registration Form</title>
	<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<form method="post" enctype="multipart/form-data" class="container">
	<table>
		<tr>
			<th>Name</th>
			<td><input type="text" name="name" placeholder="Name"/></td>
		</tr>
		<tr>
			<th>Email</th>
			<td><input type="email" name="email" placeholder="Email"/></td>
		</tr>
		<tr>
			<th>Mobile Number</th>
			<td><input  type="number" name="mobile" placeholder="Mobile Number"/></td>
		</tr>
		<tr>
			<th>Gender</th>
			<td>
			Male<input value="M"  type="radio" name="gender"/>
			Female<input value="F" type="radio" name="gender"/>
			</td>
		</tr>
		<tr>
			<th>Your Hobbies</th>
			<td>
			Programming<input  type="checkbox" name="hobbies" value="programming"/>
			Coding<input type="checkbox" name="hobbies" value="coding"/>
			Editing<input type="checkbox" name="hobbies" value="editing"/>
			</td>
		</tr>
		<tr>
			<th>Select Your Country</th>
			<td>
			<select name="country">
				<option value="">Select Your Country</option>
				<option>Philippines</option>
				<option>Austrilia</option>
				<option>China</option>
				<option>United State</option>
			</select>
			</td>
		</tr>
		<tr>
			<td colspan="2" align="center">
				<input type="submit" name="save" value="Save"/>
			</td>
		</tr>
	</table>
</form>
</body>
</html>