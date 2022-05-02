<?php
 $connection = mysqli_connect('localhost','root','','application');

$app_ID = $_COOKIE['clickedID']; 

$sel_app_info = mysqli_query($connection, "UPDATE `vacation_log` SET status = 'Odrzucono przez HR' WHERE application_id=$app_ID") or exit(mysqli_error($connection));

//setcookie("clickedID", '0');
?>