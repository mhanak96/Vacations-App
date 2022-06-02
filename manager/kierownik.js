["use strict"];

var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
script.type = "text/javascript";

console.log("Dane zalogowanego użytkownika:");
console.log(pausecontent);
console.log("Historia wniosków danego użytkownika:");
console.log(table);
console.log("Historia wniosków pracowników podlegających kierownikowi:");
console.log(tableWorkersThird);

document.cookie = "clickedID=0";

const welcome = document.getElementById("welcome");
const panelName = document.getElementById("panel-name");
const panelVacation = document.getElementById("vacation-left");
const modal3 = document.querySelector(".modal3");
const modal4 = document.querySelector(".modal4");
var errorInfo = document.getElementById("error");
const position = document.getElementById("panel-position");
const clWindow = document.getElementById("btn-close-app");

/*----------------------------------------------------*/

welcome.textContent = `Witaj ${pausecontent[1]}!`;
panelName.textContent = `${pausecontent[1]} ${pausecontent[2]}`;
panelVacation.textContent = `Pozostało ${pausecontent[7]} dni urlopu`;
position.textContent = `${pausecontent[9]}`;

// Aktualizacja danych po złożeniu wniosku
if (sessionStorage.getItem("tempCorrectResult") == null) {
  panelVacation.textContent = `Pozostało ${pausecontent[7]} dni do wykorzystania`;
} else {
  panelVacation.textContent = `Pozostało ${sessionStorage.getItem(
    "tempCorrectResult"
  )} dni do wykorzystania`;
  pausecontent[7] = sessionStorage.getItem("tempCorrectResult");
}

var correctResult;

let statusValidate = function (status) {
  if (status === "Zaakceptowane") {
    return "sacc";
  } else if (status === "Odrzucono przez Kierownika") {
    return "sref";
  } else if (status === "Odrzucono przez HR") {
    return "sref";
  } else if (status === "Oczekuje na akceptacje HR") {
    return "slea";
  } else {
    return "swai";
  }
};
const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const plusButton2 = document.querySelector(".plus2");
const minusButton2 = document.querySelector(".minus2");
//Insert data function
function Insert_Data(first = 0, second = 10) {
  var tableInsert = document.getElementById("datas");
  tableInsert.innerHTML = "";
  var tr = "";

  table.slice(first, second).forEach((x) => {
    tr += "<tr>";
    tr +=
      "<td>" +
      x.application_id +
      "</td>" +
      "<td>" +
      x.type +
      "</td>" +
      "<td>" +
      `od ${x.start_date} do ${x.end_date}` +
      "</td>" +
      "<td>" +
      x.replacement +
      "</td>" +
      `<td class="status-info ${statusValidate(x.status)}">` +
      x.status +
      "</td>";
    tr += "</tr>";
  });
  tableInsert.innerHTML += tr;
}

function Insert_Data_Workers(first = 0, second = 10) {
  var tableInsertWorkers = document.getElementById("datas_works");
  tableInsertWorkers.innerHTML = "";
  var trs = "";
  tableWorkersThird.slice(first, second).forEach((x) => {
    trs += "<tr>";

    trs +=
      "<td>" +
      x[0] +
      "</td>" +
      "<td>" +
      x[2] +
      "</td>" +
      "<td>" +
      x[3] +
      "</td>" +
      "<td>" +
      `od ${x[4]} do ${x[5]}` +
      "</td>" +
      "<td>" +
      x[6] +
      "</td>" +
      `<td class="status-action ${statusValidate(
        x[8]
      )}" onclick="applicationReview(${x[0]})">` +
      x[8] +
      "</td>";

    trs += "</tr>";
  });
  tableInsertWorkers.innerHTML += trs;
}

var statusInf = document.querySelectorAll("status-action");

function setCookie(cName, cValue, expDays) {
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

var rescopy = "";

const applicationReview = function (x) {
  const petitionNumber = document.getElementById("number");
  const petitionNumber3 = document.getElementById("number0");
  const petitionNumber2 = document.getElementById("number2");

  document.cookie = `clickedID=${x}`;

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function countDays(start, end) {
    let vacationStart = new Date(start);
    let vacationEnd = new Date(end);
    let calcDays = vacationEnd.getTime() - vacationStart.getTime();

    var daysTotal = Math.ceil(calcDays / (1000 * 3600 * 24));
    console.log(daysTotal + " dni urlopu");

    if (daysTotal == 0) {
      daysTotal = 1;
    }

    return daysTotal;
  }

  var daysResult;
  let cookieValue = getCookie("clickedID");

  console.log(cookieValue);

  var ajax = new XMLHttpRequest();

  ajax.open("GET", "appdecision.php", true);
  ajax.send();

  ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      const mName = document.getElementById("modal3-name");
      const mTime = document.getElementById("modal3-time");
      const daysCount = document.getElementById("modal3-days-count");
      const mDeputy = document.getElementById("modal3-deputy");
      const mType = document.getElementById("modal3-type");

      // second
      const mName2 = document.getElementById("modal4-name");
      const mTime2 = document.getElementById("modal4-time");
      const mDeputy2 = document.getElementById("modal4-deputy");
      const mType2 = document.getElementById("modal4-type");

      rescopy = Object.keys(response).map((key) => [
        Number(key),
        response[key],
      ]);

      mName.textContent = `Imię i nazwisko: ${rescopy[0][1][2]}`;
      mTime.textContent = `${rescopy[0][1][4]} - ${rescopy[0][1][5]}`;
      daysResult = countDays(rescopy[0][1][4], rescopy[0][1][5]);
      daysCount.textContent = `${daysResult}`;

      mDeputy.textContent = rescopy[0][1][6];
      mType.textContent = rescopy[0][1][3];

      mName2.textContent = `Imię i nazwisko: ${rescopy[0][1][2]}`;
      mTime2.textContent = `${rescopy[0][1][4]} - ${rescopy[0][1][5]}`;
      mDeputy2.textContent = rescopy[0][1][6];
      mType2.textContent = rescopy[0][1][3];

      console.log(response);
      console.log(typeof response);
      //document.cookie = 'clickedID=0';
      cookieValue = getCookie("clickedID");
      console.log(cookieValue);

      if (rescopy[0][1][8] != "Oczekuje na akceptacje") {
        modal4.classList.remove("hidden");
      } else {
        modal3.classList.remove("hidden");
      }
    }
  };

  petitionNumber.textContent = cookieValue;
  petitionNumber3.textContent = cookieValue;
  petitionNumber2.textContent = cookieValue;

  $.ajax({
    type: "GET",
    url: "appdecision.php",
    data: {
      cookie: cookieValue,
    },
  }).done(function (msg) {
    //alert("Data Saved: " + msg);
    switch (msg) {
      case "correct":
        document.forms["form-login"].submit();
        break;
      case "incorrect":
        document.getElementById("alert").classList.remove("hidden");
        document.getElementById("error").textContent = "Błędne dane logowania";
        break;
      case "error":
        document.getElementById("error").textContent = "Nieznany bład";
        break;
      default:
        document.getElementById("error").textContent = "Error!!!";
    }
  });

  console.log(`Kliknięto na wniosek nr ${x}`);
};

errorInfo.textContent = `Dostępne dni urlopu: ${pausecontent[7]}`;

const btnClose = document.querySelector(".cl2");

btnClose.addEventListener("click", function () {
  modal3.classList.add("hidden");
});

function clicked2() {
  console.log("clicked");
}

if (table.length !== 0) {
  Insert_Data();
}

if (tableWorkersThird !== "brak pracowników") {
  Insert_Data_Workers();
}

const buttonAccept = document.getElementById("btn-accept");
const buttonDecline = document.getElementById("btn-decline");

buttonAccept.addEventListener("click", function () {
  $.ajax({
    type: "POST",
    url: "decision-approve.php",
    data: {
      vacation: document.getElementById("vacation").value,
      datepicker: document.getElementById("daterangepicker").value,
      deputy: document.getElementById("deputy").value,
      comment: document.getElementById("comment").value,
    },
  }).done(function (msg) {
    switch (msg) {
      case "correct":
        document.forms["request-form"].submit();
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

    window.location.reload(true);
  });
});

//////// PAGINACJA

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

  if (!(table.length >= second)) {
    second = table.length;
    first = table.length - 10;
  }

  if (!(first >= 0)) {
    first = 0;
    second = 10;
  }

  Insert_Data(first, second);
};

const moveOn2 = (e) => {
  console.log(tableWorkersThird, first, second);

  if (e.target.innerHTML === "Starsze") {
    first = first + 10;
    second = second + 10;
  } else {
    first = first - 10;
    second = second - 10;
  }

  if (!(tableWorkersThird.length >= second)) {
    second = tableWorkersThird.length;
    first = tableWorkersThird.length - 10;
  }

  if (!(first >= 0)) {
    first = 0;
    second = 10;
  }

  Insert_Data_Workers(first, second);
};

plusButton.addEventListener("click", moveOn);
minusButton.addEventListener("click", moveOn);

plusButton2.addEventListener("click", moveOn2);
minusButton2.addEventListener("click", moveOn2);



buttonDecline.addEventListener("click", function () {
   $.ajax({
     type: "POST",
     url: "decision-decline.php",
     data: {
       vacation: document.getElementById("vacation").value,
       datepicker: document.getElementById("daterangepicker").value,
       deputy: document.getElementById("deputy").value,
       comment: document.getElementById("comment").value,
     },
   }).done(function (msg) {
     //    alert("Data Saved: " + msg);
     switch (msg) {
       case "correct":
         document.forms["request-form"].submit();
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

const options = document.getElementById("deputy");

for (let i = 0; i < collegues.length; i++) {
  let option = document.createElement("OPTION"),
    txt = document.createTextNode(collegues[i]);
  option.appendChild(txt);
  options.insertBefore(option, options.lastChild);
}

clWindow.addEventListener('click', function(){
   modal4.classList.add("hidden");

});