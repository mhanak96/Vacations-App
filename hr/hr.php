<?php 
session_start();

if(!isset($_SESSION['session_data']['0']) || $_SESSION['session_data']['5'] != 'HR')
{
    header("Location: ../index.php");
    exit();
}

  
?>

<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Panel Kadr</title>
    <meta name="description" content="Panel Kadr" />
    <meta name="keywords" content="Panel, Kadry" />

    <link rel="stylesheet" href="style.css" type="text/css" />
    <link rel="stylesheet" href="../status.css" type="text/css" />
    <link rel="stylesheet" href="fontello-2881fecc/css/tw.css" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap"
      rel="stylesheet"
    />

    <link
      rel="stylesheet"
      type="text/css"
      media="all"
      href="daterangepicker-master/daterangepicker.css"
    />
    <script
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"
    ></script>
    <script
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.1/moment.min.js"
    ></script>
    <script
      type="text/javascript"
      src="daterangepicker-master/daterangepicker.js"
    ></script>
  </head>

  <body>
    <div id="container">
      <div id="nav">
        <div id="logo">Logo</div>
        <div class='name' id="welcome">Witaj ${firstName}</div>
        <div class="nav-btn">

        <form action="../logout.php" method="post">
                <a href="../index.php"><button class="btn1">Wyloguj</button></a>
        </form>
        </div>
      </div>
      <div class="box">
        <div class="info">Panel kadrowy</div>
        <div id="dashboard">
          <div class="panelBox">
            <i class="icon-user" id="panel-name"></i>
          </div>
          <div class="panelBox">
            <i class="icon-bat2" id="vacation-left"></i>
          </div>
          <div class="panelBox" id="vacation-used"><i class="icon-help"></i>${vacationsTotal}</div>
        </div>
      </div>

      <div class="box">
        <div class="info">Moje wnioski urlopowe:</div>
        <div>
          <div id="application">
            <div>
              <button id="modal-btn" class="btn2">Złóż nowy wniosek</button>
            </div>
          </div>
          <div class="tab">
            <table>
             <thead>
              <tr>
               <th>Typ urlopu</th>
               <th>Okres</th> 
               <th>Zastępuje</th>
               <th>Status</th>
               </tr>
              </thead>
                <tbody id="datas">

                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>


      <div class="box">
        <div class="info">Wnioski urlopowe pracowników:</div>
        <div>
          <div id="application">
            <a href="pracownicy.html">
              <button class="btn3">Baza pracowników</button>
            </a>
          </div>
          <div class="tab">
            <table>
            <thead>
              <tr>
              <th>Pracownik</th> 
              <th>Typ urlopu</th> 
              <th>Okres</th>  
              <th>Zastępuje</th>  
              <th>Status</th>
              </tr>
            </thead>
            <tbody id="datas_works">
                            
            </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!--okno-->
    <div class="modal">
      <div class="modal-content">
       <div class="modal-header">
          <h1>Nowy wniosek urlopowy</h1>
        </div>
        <!-- FORM-->
        <form class="request-form" action="../holiday-request.php" method="post">
                        <div class="inputs">
                            <label>Typ urlopu:</label>
                            <select name="vacation" id="vacation">
                                <option value="zwykly">Zwykły</option>
                                <option value="zadanie">Na żądanie</option>
                                <option value="l4">L4</option>
                                <option value="bezplatny">Bezpłatny</option>
                                <option value="inny">Inny</option>
                            </select>
                            <label for="">Wybierz datę:</label><input type="text" id="daterangepicker" name="date-picker" class="form-control">
                            <label>Zastępstwo:</label>
                            <select name="deputy" id="deputy">
                                <option value="w1">Zwykły</option>
                                <option value="w2">Na żądanie</option>
                                <option value="w3">L4</option>
                            </select>
                            <label for="">Ewentualny komentarz:</label><textarea name="comment" id="comment" cols="30" rows="10"></textarea>
                        </div>
                        <div class="modal-footer">
                            <input type="button" id="submit-request" class="submit-btn1" value="Wyślij wniosek"></input>
                            <div class="alert hidden" id="alert">
					            <label id="error">....</label>
				            </div>
                        </div>
                        </form>
            <button  id="close" class="close-btn">Zamknij</button>
      </div>
    </div>
    <script src="windowhr.js"></script>

    <?php

$id = $_SESSION['session_data']['0'];


      $connection = mysqli_connect('localhost','root','','application');

      $sel_vac_history = mysqli_query($connection, " SELECT type,start_date,end_date,replacement,status FROM `vacation_log` WHERE id in ($id)") or exit(mysqli_error($connection));

      $vac_history = mysqli_fetch_all($sel_vac_history, MYSQLI_ASSOC);

      //workers identity selector 

      $sel_vac_workers = mysqli_query($connection, " SELECT id FROM `vacation_data` WHERE departament like '%Produkcja%' AND NOT id like '$id'") or exit(mysqli_error($connection));

      $vac_workers = mysqli_fetch_all($sel_vac_workers,  MYSQLI_NUM);

      $workers_join = array_merge(...$vac_workers); 

      $arr = implode(",", $workers_join);


      $sel_workers_applications = mysqli_query($connection, "SELECT * FROM `vacation_log` WHERE status LIKE '%Oczekuje na akceptacje HR%' AND NOT id like '$id'") or exit(mysqli_error($connection));

      $workers_applications = mysqli_fetch_all( $sel_workers_applications, MYSQLI_NUM);

    ?>

      <script type="text/javascript">
        var hrData = <?php echo json_encode($_SESSION['session_data']);?>;
        var table = <?php echo json_encode($vac_history);?>;
        var workersApp = <?php echo json_encode($workers_applications);?>;
      </script>
      <script type="text/javascript" src="hrscript.js"></script>
      <script type="text/javascript" src="../jquery.js"></script>
      <script type="text/javascript" src="holidayrqhr.js"></script>
  </body>
</html>
