const windowsBtn = document.querySelectorAll(".btn2");
const windowsClose = document.querySelectorAll(".close-btn");
const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");

const appButton = document.getElementById("submit-request");

windowsBtn.forEach((btn) =>
  btn.addEventListener("click", () =>
    btn.id === "modal-btn"
      ? (modal.style.display = "block")
      : (modal2.style.display = "block")
  )
);

windowsClose.forEach((btn) =>
  btn.addEventListener("click", () =>
    btn.id === "close"
      ? (modal.style.display = "none")
      : (modal2.style.display = "none")
  )
);

//-------- datapicker (kalendarz pzy wniosku)-------------

$("#daterangepicker").daterangepicker(
  {
    autoApply: true,
    locale: {
      direction: "ltr",
      format: "MM/DD/YYYY",
      separator: " - ",
      applyLabel: "Zatwierdź",
      cancelLabel: "Anuluj",
      fromLabel: "Od",
      toLabel: "Do",
      customRangeLabel: "Custom",
      daysOfWeek: ["N", "Po", "W", "S", "C", "Pi", "S"],
      monthNames: [
        "Styczeń",
        "Luty",
        "Marzec",
        "Kwiecień",
        "Maj",
        "Czerwiec",
        "Lipiec",
        "Sierpień",
        "Wrzesień",
        "Październik",
        "Listopad",
        "Grudzień",
      ],
      firstDay: 1,
    },
    linkedCalendars: false,
    showCustomRangeLabel: false,
    startDate: "01/04/2022",
    opens: "center",
    endDate: "01/10/2022",
  },
  function (start, end, label) {
    out(start, end, label);
   
  }
  
);

// walidacja wniosku - czy X może wziąć urlop

function out(start, end, label){
  // liczenie dni 
  result = countDays(start, end);
  if(result > workerData[7]){
    errorInfo.textContent = `Błąd! Masz tylko ${workerData[7]} dni urlopu. Zaznacz inny zakres dat!`;

  
    document.getElementById("submit-request").setAttribute('disabled', true);
  }
  else
  {
    correctResult = workerData[7] - result; 

  
    errorInfo.textContent = `Dostępne dni urlopu po złożeniu wniosku: ${correctResult}`;   
    document.getElementById("submit-request").removeAttribute("disabled");
  }
};


// obliczanie czy w zakresie wybranych dat są soboty i niedziele
// źródło: https://stackoverflow.com/questions/25562173/calculate-number-of-specific-weekdays-between-dates 

// const days = [0,1,2,3,4,5,6];
// 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday'

function countCertainDays( days, d0, d1 ) {
  var ndays = 1 + Math.round((d1-d0)/(24*3600*1000));
  var sum = function(a,b) {
    return a + Math.floor( ( ndays + (d0.getDay()+6-b) % 7 ) / 7 ); };
  return days.reduce(sum,0);
}

function countDays(start, end){
  let vacationStart = new Date(start);
  let vacationEnd = new Date(end);  

  let weekdays = countCertainDays([0,6], vacationStart, vacationEnd)

  let calcDays = vacationEnd.getTime() - vacationStart.getTime();

  var daysTotal = Math.ceil(calcDays / (1000 * 3600 * 24));

  let daysResult = (daysTotal - weekdays);


 
  return(daysResult);

}
