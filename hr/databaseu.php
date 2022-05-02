<?php 

$first_name2 = $_POST['first_name2'];
$second_name2 = $_POST['second_name2'];
$email2 = $_POST['email2'];
$password2 = $_POST['password2'];
$role2 = $_POST['role2'];
$departament2 = $_POST['departament2'];
$vacation_total2 = $_POST['vacation_total2'];
$job_title2 = $_POST['job_title2'];
$vacation_on2 = $_POST['vacation_on2'];
$id2 = $_POST['id2'];

$connection = mysqli_connect('localhost','root','','application');

$querry = mysqli_query($connection, "UPDATE vacation_data SET id='$id2', first_name='$first_name2', second_name='$second_name2', email='$email2', password='$password2', role='$role2', departament='$departament2', vacation_total='$vacation_total2',vacation_on='$vacation_on2', job_title='$job_title2' WHERE id='$id2'") or exit(mysqli_error($connection));

// $querry = "INSERT INTO vacation_data(id, first_name, second_name, email, password, role, departament, vacation_total,vacation_on, job_title) VALUES ('$id', '$first_name', '$second_name', '$email', '$password', '$role', '$departament', '$vacation_total', '$vacation_on', '$job_title')";




?>