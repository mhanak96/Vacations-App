<?php
session_start();
// wczytanie danych z formularza
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

// wydobycie daty początkowej i końcowej 
$dates = explode("-", $datePicker);
$time_start = strtotime($dates[0]);
$date_start = date('Y-m-d',$time_start);
$time_end = strtotime($dates[1]);
$date_end = date('Y-m-d',$time_end);

// połączenie z bazą wniosków urlopowych i zapisanie wniosku w bazie, nadanie statusu "Oczekuje na akceptacje" skutkującego możliwością rozpatrzenia wniosku przez kierownika
$connection = mysqli_connect('localhost','root','','application');

$querry = "INSERT INTO vacation_log (id, user, type, start_date, end_date, replacement, comment, status) VALUES ('$id', '$user', '$type', '$date_start', '$date_end', '$deputy', '$comment', 'Oczekuje na akceptacje')";
// zaktualizowanie w danych pracownika liczy dostępnych dni urlopu
$update_total = mysqli_query($connection, "UPDATE `vacation_data` SET vacation_total = $vacTotal WHERE id=$id") or exit(mysqli_error($connection));
$update_on = mysqli_query($connection, "UPDATE `vacation_data` SET vacation_on = vacation_on + $vacOn WHERE id=$id") or exit(mysqli_error($connection));

if ($connection->query($querry) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $querry . "<br>" . $connection->error;
  }

  // odświeżenie w celu załadowania wniosków
header("Refresh:0; url=http://localhost/vacations/employee/employee.php");

?>