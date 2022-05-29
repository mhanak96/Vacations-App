<?php
session_start();

if (!isset($_SESSION['session_data']['0']) || $_SESSION['session_data']['5'] != 'HR') {
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
  <meta name="description" content="Panel Kadr" />
  <meta name="keywords" content="Panel, Kadry" />
  <link rel="shortcut icon" href="../employee/img/logo-karta.png">
  <link rel="stylesheet" href="css/style.css" type="text/css" />
  <link rel="stylesheet" href="../status.css" type="text/css" />
  <link rel="stylesheet" href="../global/external-resources/fontello-2881fecc/css/tw.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" media="all" href="../global/external-resources/daterangepicker-master/daterangepicker.css" />
  <title>Panel Kadr</title>
</head>

<body>
  <div id="container">
    <div id="nav">
      <div id="logo"><img src="../employee/img/logo.png"></div>
      <div class='name' id="welcome">Witaj ${firstName}</div>
      <div class="nav-btn">
        <form action="../logout.php" method="post">
          <a href="../index.php"><button class="btn1" id="btn-logout">Wyloguj</button></a>
        </form>
      </div>
    </div>
    <div class="box">
      <div class="info">Panel kadrowy</div>
      <div id="dashboard">
        <div class="panelBox"><i class="icon-user"></i>
          <span id="panel-name">${firstName} ${lastName}</span>
        </div>
        <div class="panelBox"><i class="icon-user"></i>
          <span id="panel-position">${position}</span>
        </div>
        <div class="panelBox"><i class="icon-bat2"></i>
          <span id="vacation-left">${vacationDaysLeft}</span>
        </div>
      </div>

      <div class="box">
        <div class="info">Moje wnioski urlopowe</div>
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
                  <th>ID wniosku</th>
                  <th>Typ urlopu</th>
                  <th>Okres</th>
                  <th>Zastępuje</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody id="datas">

              </tbody>
            </table>
            <button class="minus">Nowsze</button><button class="plus">Starsze</button>
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <div class="info">Wnioski urlopowe pracowników</div>
      <div>
        <div id="application">
          <a href="pracownicy.php">
            <button class="btn3">Baza pracowników</button>
          </a>
        </div>
        <div class="tab">
          <table>
            <thead>
              <tr>
                <th>ID wniosku:</th>
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
          <button class="minus2">Nowsze</button><button class="plus2">Starsze</button>
        </div>
      </div>
    </div>
  </div>

  <!--Wniosek urlopowy-->
  <div class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h1>Nowy wniosek urlopowy</h1>
      </div>
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

          </select>
          <label for="">Ewentualny komentarz:</label><textarea name="comment" id="comment" cols="30" rows="10"></textarea>
        </div>
        <div class="modal-footer">
          <input type="button" id="submit-request" class="submit-btn1" value="Wyślij wniosek"></input>
          <label id="error">....</label>
        </div>
      </form>
      <button id="close" class="close-btn">Zamknij</button>
    </div>
  </div>
  <!-- Ocena wniosku -->
  <div class="modal3 smodal hidden">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="pet-tittle">Ocena wniosku <span id="number">${number}</span></h1>
      </div>
      <div>
        <label id="modal3-name">Imię i Nazwisko: <span>...</span></label>
      </div>
      <div>
        <label>Okres czasu: <span id="modal3-time">...</span></label>
      </div>
      <div>
        <label>Zastępuje:<span id="modal3-deputy">...</span></label>
      </div>
      <div>
        <label>Typ urlopu:<span id="modal3-type">...</span></label>
      </div>
      <div class="modal-footer">
        <input type="submit" id="btn-accept" id="submit-request" class="submit-btn1" value="Zaakceptuj"></input>
        <button id="btn-decline" class="close-btn cl2">Odrzuć</button>
      </div>
    </div>
  </div>
  <!-- Informacje o wniosku -->
  <div class="modal4 smodal hidden">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="pet-tittle">Informacje o wniosku <span id="number2">${number}</span></h1>
      </div>
      <div>
        <label id="modal4-name">Imię i Nazwisko: <span>...</span></label>
      </div>
      <div>
        <label>Okres czasu: <span id="modal4-time">...</span></label>
      </div>
      <div>
        <label>Zastępuje:<span id="modal4-deputy">...</span></label>
      </div>
      <div>
        <label>Typ urlopu:<span id="modal4-type">...</span></label>
      </div>
    </div>
  </div>
  <footer class="footer">
        <div class="containerFooter">
            <div class="logo-footer">
                <img class="logo-footer-img" src="../employee/img/logo.png">
                <p>Aplikacja Urlopowa:</p>
            </div>
            <div class="person">
                <p>Mateusz Hanak</p>
                <a href="https://www.linkedin.com/mwlite/in/mateuszhanak" target="blank"><img id="#" src="../employee/img/linkedin.png" alt="linkedin"></a>
                <a href="https://github.com/mhanak96" target="blank"> <img id="#" src="../employee/img/github.png" alt="github"></a>
            </div>
            <div class="person">
                <p>Robert Śliwiński</p>
                <a href="https://www.linkedin.com/in/robert-%C5%9Bliwi%C5%84ski-602b68167" target="blank"><img id="#" src="../employee/img/linkedin.png" alt="linkedin"></a>
                <a href="https://github.com/R-Sliw?tab=repositories" target="blank"> <img id="#" src="../employee/img/github.png" alt="github"></a>
            </div>
            <div class="person">
                <p>Łukasz Juchniewicz</p>
                <a href="https://www.linkedin.com/in/lukasz-juchniewicz/" target="blank"><img id="#" src="../employee/img/linkedin.png" alt="linkedin"></a>
                <a href="https://github.com/juchas019" target="blank"> <img id="#" src="../employee/img/github.png" alt="github"></a>
            </div>
        </div>
    </footer>
  <a id="button"></a>


  <script type="text/javascript" src="../global/js/jquery.js"></script>

  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.1/moment.min.js"></script>
  <script type="text/javascript" src="../global/external-resources/daterangepicker-master/daterangepicker.js"></script>
  <script src="../global/external-resources/scrolUp.js"></script>

  <?php
  $id = $_SESSION['session_data']['0'];
  $worker_depart = $_SESSION['session_data']['6'];

  //historia wniosków 
  $connection = mysqli_connect('localhost', 'root', '', 'application');
  $sel_vac_history = mysqli_query($connection, "SELECT application_id,type,start_date,end_date,replacement,status FROM `vacation_log` WHERE id='$id' ORDER BY application_id DESC") or exit(mysqli_error($connection));
  $vac_history = mysqli_fetch_all($sel_vac_history, MYSQLI_ASSOC);

  //wnioski wszystkich pracowników
  $sel_workers_applications = mysqli_query($connection, "SELECT * FROM `vacation_log` WHERE id NOT like '$id' ORDER BY application_id DESC") or exit(mysqli_error($connection));
  $workers_applications = mysqli_fetch_all($sel_workers_applications, MYSQLI_NUM);

  //zaznaczenie współpracowników
  $sel_collegues = mysqli_query($connection, "SELECT first_name FROM `vacation_data` WHERE departament like '$worker_depart' AND NOT id like $id") or exit(mysqli_error($connection));
  $name_collegues  = mysqli_fetch_all($sel_collegues, MYSQLI_NUM);
  $collegues_join = array_merge(...$name_collegues);

  ?>

  <!-- Przekazanie danych z PHP do JS -->
  <script type="text/javascript">
    var hrData = <?php echo json_encode($_SESSION['session_data']); ?>;
    var table = <?php echo json_encode($vac_history); ?>;
    var workersApp = <?php echo json_encode($workers_applications); ?>;
    var collegues = <?php echo json_encode($collegues_join); ?>;
  </script>

  <script src="js/windowhr.js"></script>
  <script type="text/javascript" src="js/hrscript.js"></script>
  <script type="text/javascript" src="../global/js/logout.js"></script>
  <script type="text/javascript" src="js/holidayrqhr.js"></script>

</body>

</html>