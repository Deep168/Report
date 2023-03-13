<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.1/font/bootstrap-icons.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  <link rel="stylesheet" href="./style.css">
  <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon">
  <link href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css" rel="stylesheet" />
  <script src="https://ajax.googleapis.com//ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <title>PHP CRUD Operations</title>
</head>

<body>

  <div class="container">
    <div class="py-4">
      <a href="./index.php" class="btn btn-secondary">
      Employee
      </a>
      <a href="./department.php" class="btn btn-secondary">
        <i ></i> Department
      </a>
    </div>

    <!-- Table starts here -->
    <table class="table table-bordered table-striped align-middle" id="usertable">
      <thead>
        <tr>
          <th>#</th>
          <th>Department</th>
          <th>No of Employee</th>
          <th> Total Salary</th>
         
        </tr>
      </thead>
      <tbody>
        <?php
        # Include connection
        require_once "./config/config.php";

        # Attempt select query execution
        $sql = "SELECT department,count(id)as empno ,sum(salary)as totalsalary FROM employee group by department";

        if ($result = mysqli_query($link, $sql)) {
          if (mysqli_num_rows($result) > 0) {
            $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
            $count = 1;
            foreach ($rows as $row) { ?>
              <tr>
                <td><?= $count++; ?></td>
                <td><?= $row["department"]; ?></td>
                <td><?= $row["empno"]; ?></td>
                <td><?= $row["totalsalary"]; ?></td>
                <!-- <td>
                  <a href="./update.php?id=<?= $row["id"]; ?>" class="btn btn-primary btn-sm">
                    <i class="bi bi-pencil-square"></i>
                  </a>&nbsp;
                  <a href="./delete.php?id=<?= $row["id"]; ?>" class="btn btn-danger btn-sm">
                    <i class="bi bi-trash-fill"></i>
                  </a>
                </td> -->
              </tr>
            <?php
            }
            # Free result set
            mysqli_free_result($result);
          } else { ?>
            <tr>
              <td class="text-center text-danger fw-bold" colspan="9">** No records were found **</td>
            </tr>
        <?php
          }
        }
        # Close connection
        mysqli_close($link);
        ?>
      </tbody>
    </table>
  </div>

  <!-- <script>
    const delBtnEl = document.querySelectorAll(".btn-danger");
    delBtnEl.forEach(function(delBtn) {
      delBtn.addEventListener("click", function(e) {
        const message = confirm("Are you sure you want to delete this record?");
        if (message == false) {
          e.preventDefault();
        }
      });
    });
  </script> -->
  <script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
<script>
    $(function () {
        $('#usertable').DataTable();
    });
</script>
</body>

</html>