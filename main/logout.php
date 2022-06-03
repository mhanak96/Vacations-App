<!-- zabicie sesji w PHPie i przenisienie do ekranu logowania -->
<?php
   session_start();
   session_destroy();

   header("Location: ../index.php");
   exit();
?>