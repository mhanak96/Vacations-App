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
    <link rel="stylesheet" href="fontello-2881fecc/css/tw.css" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap"
      rel="stylesheet"
    />
  </head>

  <body>
    <div id="nav">
      <div id="logo">Logo</div>
      <div class="name">Baza pracowników</div>
      <div class="nav-btn">
        <button class="btn1">
          <a class="nav-link" href="hr.php">Panel głowny</a>
        </button>
        <form action="../logout.php" method="post">
                <a href="../index.php"><button class="btn1">Wyloguj</button></a>
        </form>
      </div>
    </div>
    <div class="box">
      <div class="info">Pracownicy:</div>
      <div id="application">
        <div>
          <button class="btn3">Dodaj pracownika</button>
        </div>
      </div>

      <?php 
        $connection = mysqli_connect('localhost','root','','application');
        $sel_crud = mysqli_query($connection, " SELECT * FROM vacation_data") or exit(mysqli_error($connection));

        $table_crud = mysqli_fetch_all($sel_crud, MYSQLI_ASSOC);



      ?>

      <div class="tab">
        <table>
          <tr>
            <th>ID</th>
            <th>Imie</th>
            <th>Nazwisko</th>
            <th>Email</th>
            <th>Hasło</th>
            <th>Uprawnienie</th>
            <th>Departament</th>
            <th>Dni urlopu</th>
            <th>Pozostałe dni</th>
            <th>Stanowisko</th>
            <th>Działanie</th>
          </tr>
          <tbody id="datas">

          </tbody>
        </table>
      </div>
    </div>
    <!---------------------------okno----------------------------->
    <div class="modal2">
      <div class="modal-content modal-add-worker">
        <div class="modal-header">
          <h1>Dodaj pracownika</h1>
        </div>
        <!-- action="process.php" method="POST" -->
        <form class="crud-form" action="process.php" method="POST">
        <div class="inputs">
          <label for="first_name">Imię:</label>
          <input class="form-control" type="text" name="first_name" id="first_name" />
          <label for="">Nazwisko:</label>
          <input
            class="form-control"
            type="text"
            name="second_name"
            id="second_name"
          />
          <label for="email">Adres email:</label>
          <input
            class="form-control"
            type="email"
            name="email"
            id="email"
          />
          <label for="password">Hasło:</label>
          <input
            class="form-control"
            type="password"
            name="password"
            id="password"
          />
          <label for="job_title">Stanowisko:</label>
          <input
            class="form-control"
            type="text"
            name="job_title"
            id="job_title"
          />
          <label for="departament">Departament:</label>
          <input
            class="form-control"
            type="text"
            name="departament"
            id="departament"
          />
          <label for="role">Rola:</label>
          <select name="role" id="role">
            <option value="Pracownik">Pracownik</option>
            <option value="Kierownik">Kierownik</option>
            <option value="HR">HR</option>
          </select>
          <label for="vacation_total">Ilość dni wolnego:</label>
          <input
            class="form-control"
            type="number"
            name="vacation_total"
            id="vacation_total"
            min="1"
            max="30"
            value="1"
          />
          <label for="vacation_on">Pozostała ilość dni wolnego:</label>
          <input
            class="form-control"
            type="number"
            name="vacation_on"
            id="vacation_on"
            min="1"
            max="30"
            value="0"
          />
          <label for="id">ID:</label>
          <input
            class="form-control"
            type="number"
            name="id"
            id="id"
            min="1"
            max="30"
            value="0"
          />
        </div>
        <div class="modal-footer">
          <input type="button" id="crud-submit" class="submit-btn1" value="Dodaj Pracownika"></input>
          <button id="close2" class="close-btn2">Zamknij</button>
          <label id="error">....</label>
          </div>
        </form>
      </div>
    </div>

    <!-- modal 2 -->
    <div class="modal3 hidden">
      <div class="modal-content modal-add-worker">
        <div class="modal-header">
          <h1>Zaktualizuj dane pracownika</h1>
        </div>
        <!-- action="process.php" method="POST" -->
        <form class="crud-update" action="databaseu.php" method="POST">
        <div class="inputs">
          <label for="first_name2">Imię:</label>
          <input class="form-control" type="text" name="first_name2" id="first_name2" />
          <label for="">Nazwisko:</label>
          <input
            class="form-control"
            type="text"
            name="second_name2"
            id="second_name2"
          />
          <label for="email2">Adres email:</label>
          <input
            class="form-control"
            type="email2"
            name="email2"
            id="email2"
          />
          <label for="password2">Hasło:</label>
          <input
            class="form-control"
            type="password2"
            name="password2"
            id="password2"
          />
          <label for="job_title2">Stanowisko:</label>
          <input
            class="form-control"
            type="text"
            name="job_title2"
            id="job_title2"
          />
          <label for="departament2">Departament:</label>
          <input
            class="form-control"
            type="text"
            name="departament2"
            id="departament2"
          />
          <label for="role2">Rola:</label>
          <select name="role2" id="role2">
            <option value="Pracownik">Pracownik</option>
            <option value="Kierownik">Kierownik</option>
            <option value="HR">HR</option>
          </select>
          <label for="vacation_total2">Ilość dni wolnego:</label>
          <input
            class="form-control"
            type="number"
            name="vacation_total2"
            id="vacation_total2"
            min="1"
            max="30"
            value="1"
          />
          <label for="vacation_on2">Pozostała ilość dni wolnego:</label>
          <input
            class="form-control"
            type="number"
            name="vacation_on2"
            id="vacation_on2"
            min="1"
            max="30"
            value="0"
          />
          <label id="id_update">...</label>
        </div>
        <div class="modal-footer">
          <input type="submit" id="crud-btn-update" class="submit-btn1" value="Zaktualizuj dane pracownika"></input>
          <button id="close2" class="close-btn2">Zamknij</button>
          <label id="error">....</label>
          </div>
        </form>
      </div>
    </div>

    <script type="text/javascript">
        var table_crud = <?php echo json_encode($table_crud);?>;
    </script>
    <script type="text/javascript" src="../jquery.js"></script>
    <script type="text/javascript" src="window2.js"></script>
    <script type="text/javascript" src="crud.js"></script>
  </body>
</html>
