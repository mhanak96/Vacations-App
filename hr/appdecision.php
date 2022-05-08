<?php
// Wczytanie informacji o wniosku
$connection = mysqli_connect('localhost','root','','application');
$app_ID = $_COOKIE['clickedID'];

$sel_app_info = mysqli_query($connection, "SELECT * FROM `vacation_log` WHERE application_id=$app_ID;") or exit(mysqli_error($connection));
$app_info = mysqli_fetch_all($sel_app_info,  MYSQLI_NUM);
echo json_encode($app_info);

exit();
?>

