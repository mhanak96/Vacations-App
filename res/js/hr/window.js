const windowsBtn = document.querySelector(".btn2");
const windowsBtn2 = document.querySelector(".btn3");
const windowsClose = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");


const appButton = document.getElementById("submit-request");

function open(e) {
  e.target.id === "modal-btn"
    ? (modal.style.display = "block")
    : (modal2.style.display = "block");
}

function close(e) {
  console.log(e);
  e.target.id === "close"
    ? (modal.style.display = "none")
    : (modal2.style.display = "none");
}
if (windowsClose) {
  windowsBtn.addEventListener("click", open);
  windowsClose.addEventListener("click", close);
}
windowsBtn2.addEventListener("click", open);


//-------- datapicker-------------

function countDays(start, end){
  let vacationStart = new Date(start);
  let vacationEnd = new Date(end);  
  let calcDays = vacationEnd.getTime() - vacationStart.getTime();

  var daysTotal = Math.ceil(calcDays / (1000 * 3600 * 24));
  console.log(daysTotal + ' dni urlopu');

 
  return(daysTotal);

}

var result;
var correctResult;

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
    vac_start =  new Date(start);
    vac_end = new Date(end); 

    out(start, end, label);
  }
);

// sprawdzenie czy w zakresie wybranych dni nie ma sobót i niedziel 
// https://stackoverflow.com/questions/25562173/calculate-number-of-specific-weekdays-between-dates

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
