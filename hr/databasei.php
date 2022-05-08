<?php
//dodanie nowego pracownika 
$first_name = $_POST['first_name'];
$second_name = $_POST['second_name'];
$email = $_POST['email'];
$password = $_POST['password'];
$role = $_POST['role'];
$departament = $_POST['departament'];
$vacation_total = $_POST['vacation_total'];
$job_title = $_POST['job_title'];
$vacation_on = $_POST['vacation_on'];
$id = $_POST['id'];

$connection = mysqli_connect('localhost','root','','application');
$querry = "INSERT INTO vacation_data(id, first_name, second_name, email, password, role, departament, vacation_total,vacation_on, job_title) VALUES ('$id', '$first_name', '$second_name', '$email', '$password', '$role', '$departament', '$vacation_total', '$vacation_on', '$job_title')";

?>