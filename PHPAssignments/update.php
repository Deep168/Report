<?php
# Include connection
require_once "./config/config.php";

# Define variables and initialize with empty values
$name_err = $department_err = $salary_err = "";
$name  = $department = $salary="";

# Processing form data when form is submitted
if (isset($_POST["id"]) && !empty($_POST["id"])) {
  # Get hidden input value
  $id = $_POST["id"];

  if (empty(trim($_POST["name"]))) {
    $name_err = "This field is required.";
  } else {
    $name = ucfirst(trim($_POST["name"]));
    if (!ctype_alpha($name)) {
      $name_err = "Invalid name format.";
    }
  }


  if (empty($_POST["department"])) {
    $department_err = "This field is required.";
  } else {
    $department = $_POST["department"];
  }

  if (empty($_POST["salary"])) {
    $salary_err = "This field is required";
  } else {
    $salary = $_POST["salary"];
  }

  # Check input errors before updating data from database
  if (empty($name_err) && empty($department_err) && empty($salary_err)) {
    # Preapre an update statement
    $sql = "UPDATE employee SET name = ?,  department = ?, salary = ? WHERE id = ?";

    if ($stmt = mysqli_prepare($link, $sql)) {
      # Bind variables to the prepared statement as parameters
      mysqli_stmt_bind_param($stmt, "ssii", $param_name, $param_department, $param_salary, $param_id);

      # Set parameters
      $param_name = $name;
      $param_department = $department;
      $param_salary = $salary;
      $param_id = $id;

      # Execute the statement
      if (mysqli_stmt_execute($stmt)) {
        echo "<script>" . "alert('Record has been updated successfully.');" . "</script>";
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
} else {
  # Check if URL contains id parameter before processing further
  if (isset($_GET["id"]) && !empty(trim($_GET["id"]))) {
    # Get URL paramater
    $id = trim($_GET["id"]);

    # Prepare a select statement
    $sql = "SELECT * FROM employee WHERE id = ?";

    if ($stmt = mysqli_prepare($link, $sql)) {
      # Bind variables to the prepared statement as parameters
      mysqli_stmt_bind_param($stmt, "i", $param_id);

      # Set Parameters
      $param_id = $id;

      # Execute the statement
      if (mysqli_stmt_execute($stmt)) {
        $result = mysqli_stmt_get_result($stmt);

        if (mysqli_num_rows($result) == 1) {
          # Fetch result row as an associative array
          $row = mysqli_fetch_array($result);

          # Retrieve individual field value
          $name = $row["name"];
          $department = $row["department"];
          $salary = $row["salary"];
        } else {
          # URL doesn't contain valid id parameter. Redirect to index page
          echo "<script>" . "window.location.href='./'" . "</script>";
          exit;
        }
      } else {
        echo "Oops! Something went wrong. Please try again later";
      }
    }
    # Close statement
    mysqli_stmt_close($stmt);

    # Close connection
    mysqli_close($link);
  } else {
    # Redirect to index.php if URL doesn't contain id parameter
    echo "<script>" . "window.location.href='./'" . "</script>";
    exit;
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
  <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon">
  <title>PHP CRUD Operations</title>
</head>

<body>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-lg-6">
        <h1>Edit Employee</h1>
        <!-- form starts here -->
        <form action="<?= htmlspecialchars(basename($_SERVER["REQUEST_URI"]));  ?>" class="bg-light p-4 shadow-sm" method="post" novalidate>
          <div class="row gy-3">
            <div class="col-lg-6">
              <label for="name" class="form-label"> Name</label>
              <input type="text" class="form-control" name="name" id="name" value="<?= $name; ?>">
              <small class="text-danger"><?= $name_err; ?></small>
            </div>
           
            <div class="col-lg-6">
              <label for="department" class="form-label">department</label>
              <select name="department" class="form-select" id="department">
                <option selected disabled>Select department</option>
                <option value="UI Designer" <?= (isset($department) && $department == "UI Designer") ? "selected" : ""; ?>>
                  UI Designer
                </option>
                <option value="Frontend Developer" <?= (isset($department) && $department == "Frontend Developer") ? "selected" : ""; ?>>
                  Frontend Developer
                </option>
                <option value="PHP Developer" <?= (isset($department) && $department == "PHP Developer") ? "selected" : ""; ?>>
                  PHP Developer
                </option>
                <option value="Android Developer" <?= (isset($department) && $department == "Android Developer") ? "selected" : ""; ?>>
                  Android Developer
                </option>
              </select>
              <small class="text-danger"><?= $department_err; ?></small>
            </div>
            <div class="col-lg-6">
              <label for="date" class="form-label">Salary</label>
              <input type="text" class="form-control" name="salary" id="salary" value="<?= $salary; ?>">
              <small class="text-danger"><?= $salary_err; ?></small>
            </div>
            <div class="col-lg-12 d-grid">
              <input type="hidden" class="form-control" name="id" value="<?= $id; ?>">
              <button type="submit" class="btn btn-primary">Update Employee</button>
            </div>
          </div>
        </form>
        <!-- form ends here -->
      </div>
    </div>
  </div>
</body>