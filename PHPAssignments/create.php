<?php
# Include connection
require_once "./config/config.php";

# Define variables and initialize with empty values
$name_err  = $dept_err = $salary_err = "";
$name = $department = $salary = "";

# Processing form data when form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty(trim($_POST["name"]))) {
        $name_err = "This field is required.";
    } else {
        $name = ucfirst(trim($_POST["name"]));
        if (!ctype_alpha($name)) {
            $name_err = "Invalid name format.";
        }
    }


    if (empty($_POST["department"])) {
        $dept_err = "This field is required.";
    } else if($_POST['department']=="new"){
        $department = $_POST["new"];
    } else {
        $department = $_POST["department"];
    }

    if (empty(trim($_POST["salary"]))) {
        $salary_err = "This field is required.";
    } else {
        $salary = $_POST["salary"];
    }


    # Check input errors before inserting data into database
    if (empty($name_err) && empty($dept_err) && empty($salary_err)) {
        # Preapre an insert statement
        $sql = "INSERT INTO employee (name,department,salary) VALUES (?, ?, ?)";

        if ($stmt = mysqli_prepare($link, $sql)) {
            # Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "ssi", $param_name, $param_department, $param_salary);

            # Set parameters
            $param_name = $name;
            $param_department = $department;
            $param_salary = $salary;

            # Execute the statement
            if (mysqli_stmt_execute($stmt)) {
                echo "<script>" . "alert('New record created successfully.');" . "</script>";
                echo "<script>" . "window.location.href='./'" . "</script>";
                exit;
            } else {
                echo "Oops! Something went wrong. Please try again later.";
            }
        }

        # Close statement
        mysqli_stmt_close($stmt);
    }

    # Close connection
    mysqli_close($link);
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
    <link rel="shortcut icon" href="./favicon.ico" type="imsalary/x-icon">
    <title>PHP CRUD Operations</title>
</head>

<body>
    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-lg-6">

                <h1>Add Employee</h1>
                <!-- form starts here -->
                <form name="form" action="<?= htmlspecialchars($_SERVER["PHP_SELF"]); ?>" class="bg-light p-4 shadow-sm" method="post" novalisalary>
                    <div class="row gy-3">
                        <div class="col-lg-6">
                            <label for="name" class="form-label"> Name</label>
                            <input type="text" class="form-control" name="name" id="name" value="<?= $name; ?>">
                            <small class="text-danger"><?= $name_err; ?></small>
                        </div>
                        <div class="col-lg-6" id="n3">
                            <label for="dep">Department Name</label>
                            <select class="form-control" id="dep" name="department" onchange="adddepartment()">
                                <option value="">Select Department</option>
                                <?php $sql = "select department from department";
                                $result = mysqli_query($link, $sql);
                                if ($result) {
                                    while ($row = mysqli_fetch_assoc($result)) {
                                        $option = $row['department']; ?>
                                        <option><?php echo $option; ?></option>

                                <?php  }
                                } ?>
                                <option value="new">new</option>
                            </select>
                            <small class="text-danger"><?= $dept_err; ?></small>
                        </div>
                        <div id="n1" style="display:none;">
                            <label>New Department</label>
                            <input type="text" name="new"  />
                        </div>
                        <div class="col-lg-6">
                            <label for="salary" class="form-label"> salary</label>
                            <input type="text" class="form-control" name="salary" id="salary" value="<?= $salary; ?>">
                            <small class="text-danger"><?= $salary_err; ?></small>
                        </div>
                        <div class="col-lg-12 d-grid">
                            <button type="submit" class="btn btn-primary">Add Employee</button>
                        </div>
                    </div>
                </form>

                <script>
                    function adddepartment() {

                        var x = document.form.department.value;
                        var y = document.getElementById("n1");
                        // var z=document.getElementById("department");
                        if (x == "new") {
                            y.style.display = "block";
                            // z.style.display="none";

                        }
                    }
                </script>
                <!-- form ends here -->
            </div>
        </div>
    </div>
</body>

</html>