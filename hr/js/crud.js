"use strict";

console.log("e.target.innerHTML");

const button = document.getElementById("crud-submit");
const buttonUpdate = document.getElementById("crud-btn-update");
// Załadowanie wszystkich pracowników
function Insert_Data(first = 0, second = 10) {
  var tableInsert2 = document.getElementById("datas");
  tableInsert2.innerHTML = "";
  var tr = "";
  table_crud.slice(first, second).forEach((x) => {
    tr += "<tr>";
    tr +=
      "<td>" +
      x.id +
      "</td>" +
      "<td>" +
      x.first_name +
      "</td>" +
      "<td>" +
      x.second_name +
      "</td>" +
      "<td>" +
      x.email +
      "</td>" +
      "<td>" +
      x.password +
      "</td>" +
      "<td>" +
      x.role +
      "</td>" +
      "<td>" +
      x.departament +
      "</td>" +
      "<td>" +
      x.vacation_total +
      "</td>" +
      "<td>" +
      x.vacation_on +
      "</td>" +
      "<td>" +
      x.job_title +
      "</td>" +
      "<td>" +
      `<input type="button" value="Edytuj" onclick="database_update_toogle(${x.id})"></input> <input type="button" value="Usuń" onclick="database_remove(${x.id})"></input>` +
      "</td>";
    tr += "</tr>";
  });
  tableInsert2.innerHTML += tr;
}

Insert_Data();

// utworzenie nowego pracownika
button.addEventListener("click", function () {
  $.ajax({
    type: "POST",
    url: "databasei.php",
    data: {
      id: document.getElementById("id").value,
      first_name: document.getElementById("first_name").value,
      second_name: document.getElementById("second_name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      role: document.getElementById("role").value,
      departament: document.getElementById("departament").value,
      vacation_total: document.getElementById("vacation_total").value,
      vacation_on: document.getElementById("vacation_on").value,
      job_title: document.getElementById("job_title").value,
    },
  }).done(function (msg) {
    switch (msg) {
      case "correct":
        document.forms["crud-form"].submit();
        window.location.reload(true);
        break;
      case "incorrect":
        document.getElementById("alert").classList.remove("hidden");
        document.getElementById("error").textContent = "Błędne dane logowania";
        break;
      case "error":
        document.getElementById("error").textContent = "Nieznany bład";
        break;
      default:
        document.getElementById("error").textContent = "Correct2!";
        window.location.reload(true);
    }
  });
});

// Usunięcie pracownika
function database_remove(x) {
  $.ajax({
    type: "POST",
    url: "databaser.php",
    data: {
      id: x,
    },
  }).done(function (msg) {
    switch (msg) {
      case "correct":
        window.location.reload(true);
        break;
      case "incorrect":
        document.getElementById("alert").classList.remove("hidden");
        document.getElementById("error").textContent = "Błędne dane logowania";
        break;
      case "error":
        document.getElementById("error").textContent = "Nieznany bład";
        break;
      default:
        document.getElementById("error").textContent = "Correct2!";
        console.log("ERROR");
        window.location.reload(false);
    }
  });
}

// Edytowanie danych pracownika
function database_update_toogle(x) {
  const updLabel = document.getElementById("id_update");
  const modal3 = document.querySelector(".modal3");
  modal3.classList.remove("hidden");
  updLabel.textContent = x;
}

buttonUpdate.addEventListener("click", function () {
  $.ajax({
    type: "POST",
    url: "databaseu.php",
    data: {
      id2: document.getElementById("id_update").textContent,
      first_name2: document.getElementById("first_name2").value,
      second_name2: document.getElementById("second_name2").value,
      email2: document.getElementById("email2").value,
      password2: document.getElementById("password2").value,
      role2: document.getElementById("role2").value,
      departament2: document.getElementById("departament2").value,
      vacation_total2: document.getElementById("vacation_total2").value,
      vacation_on2: document.getElementById("vacation_on2").value,
      job_title2: document.getElementById("job_title2").value,
    },
  }).done(function (msg) {
    switch (msg) {
      case "correct":
        document.forms["crud-update"].submit();
        window.location.reload(false);
        break;
      case "incorrect":
        document.getElementById("alert").classList.remove("hidden");
        document.getElementById("error").textContent = "Błędne dane logowania";
        break;
      case "error":
        document.getElementById("error").textContent = "Nieznany bład";
        break;
      default:
        document.getElementById("error").textContent = "Correct2!";
        console.log("ERROR");
        window.location.reload(false);
    }
  });
});

///// PAGINACJA

const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
let first = 0;
let second = 10;
const moveOn = (e) => {
  if (e.target.innerHTML === "Starsze") {
    first = first + 10;
    second = second + 10;
  } else {
    first = first - 10;
    second = second - 10;
  }

  if (!(table_crud.length >= second)) {
    second = table_crud.length;
    first = table_crud.length - 10;
  }

  if (!(first >= 0)) {
    first = 0;
    second = 10;
  }

  Insert_Data(first, second);
};

plusButton.addEventListener("click", moveOn);
minusButton.addEventListener("click", moveOn);