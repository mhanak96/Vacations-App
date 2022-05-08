<?php 
// usunięcie danych pracownika z bazy
$id = $_POST['id'];

$connection = mysqli_connect('localhost','root','','application');

$querry = mysqli_query($connection, "DELETE FROM vacation_data WHERE id=$id") or exit(mysqli_error($connection));


?>