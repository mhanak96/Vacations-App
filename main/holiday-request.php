<!-- wniosek Kierownika oraz pracownika HR o akceptacje jego wniosku -->
<?php
session_start();


$id = $_SESSION['session_data']['0'];
$firstName = $_SESSION['session_data']['1'];
$lastName = $_SESSION['session_data']['2'];
$user = "{$firstName} {$lastName}";
$type = $_POST['vacation'];
$datePicker = $_POST['datepicker'];
$deputy = $_POST['deputy'];
$comment = $_POST['comment'];

$vacTotal = $_POST['vacTotal'];
$vacOn = $_POST['vacOn'];


$dates = explode("-", $datePicker);

echo($id);
echo($type);
echo($deputy);
echo($comment);




$time_start = strtotime($dates[0]);

$date_start = date('Y-m-d',$time_start);

echo $date_start;

$time_end = strtotime($dates[1]);

$date_end = date('Y-m-d',$time_end);

echo $date_end;


$connection = mysqli_connect('localhost','root','','application');



$querry = "INSERT INTO vacation_log (id, user, type, start_date, end_date, replacement, comment, status) VALUES ('$id', '$user', '$type', '$date_start', '$date_end', '$deputy', '$comment', 'Oczekuje na akceptacje HR')";

$update_total = mysqli_query($connection, "UPDATE `vacation_data` SET vacation_total = $vacTotal WHERE id=$id") or exit(mysqli_error($connection));
$update_on = mysqli_query($connection, "UPDATE `vacation_data` SET vacation_on = vacation_on + $vacOn WHERE id=$id") or exit(mysqli_error($connection));


if ($connection->query($querry) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $querry . "<br>" . $connection->error;
  }

 ?>