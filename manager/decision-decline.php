<?php
$connection = mysqli_connect('localhost','root','','application');

$app_ID = $_COOKIE['clickedID'];
// poibrać z bazy ilość dni wniosku 

$get_days = mysqli_query($connection, "SELECT id, DATEDIFF(end_date, start_date) AS result FROM vacation_log WHERE application_id =$app_ID") or exit(mysqli_error($connection));
$days_arr = mysqli_fetch_all($get_days, MYSQLI_NUM);
$days_join = array_merge(...$days_arr); 

$i_dj0 = (int)$days_join[0];
$i_dj1 = (int)$days_join[1];
//trzeba zwiększyć o 1 ponieważ przyjęto że urlop bieże się włącznie z dniem X
$i_dj1++;

$sel_app_info = mysqli_query($connection, "UPDATE `vacation_log` SET status = 'Odrzucono przez Kierownika' WHERE application_id=$app_ID") or exit(mysqli_error($connection));
//zwrot urlopu w przypadku odrzucenia
$days_back = mysqli_query($connection, "UPDATE `vacation_data` SET vacation_total = vacation_total + $i_dj1 WHERE id=$i_dj0") or exit(mysqli_error($connection));


?>