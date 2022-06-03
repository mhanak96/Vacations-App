<?php 
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
</head>
<body>

<!-- ===================================================================================================== -->
<!-- cześć techniczna - sprawdzenie poprawności maila i hasła oraz przyporządkowanie użytkownika do odpowiedniego panelu -->
<?php


 $emailText = $_POST['email'];
 $passwordText =  $_POST['password'];
 $connection = mysqli_connect('localhost','root','','application');

 
 $select = mysqli_query($connection, "SELECT * FROM vacation_data WHERE email LIKE '$emailText'") or exit(mysqli_error($connection));
 $toArray = mysqli_fetch_array($select, MYSQLI_NUM);
 
 $_SESSION['session_data'] = $toArray;
  
    switch($toArray[5]){
    case "Pracownik":
        header("Location: ../employee/employee.php");
        exit();
        break;
    case "Kierownik":
        header("Location: ../manager/kierownik.php");
        exit();
        break;
    case "HR":
        header("Location: ../hr/hr.php");
        exit();
        break;
    default:
        echo('error - no such role!');
    }
?>

<!-- ===================================================================================================== -->

</body>
</html>



