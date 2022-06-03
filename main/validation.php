<?php
    // sprawdzenie poprawności wprowadzonych danych z bazą
    
    $emailText = $_POST['email'];
    $passwordText =  $_POST['password'];
    $connection = mysqli_connect('localhost','root','','application');

    if($connection -> connect_error) {
        die('Connect Error (' .  $connection->connect_errno . ') ' .  $connection->connect_error);
    }


   
    $select = mysqli_query($connection, "SELECT * FROM vacation_data WHERE email LIKE '$emailText'") or exit(mysqli_error($connection));
    $toArray = mysqli_fetch_array($select);
    
    if($emailText === $toArray[3] && $passwordText === $toArray[4]){
        echo('correct');
    }
    else if($emailText !== $toArray[3] || $passwordText !== $toArray[4]){
        echo('incorrect');
    }
    else{
        echo('error');
    }
    ?>