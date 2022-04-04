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

  

//$("#daterangepicker").trigger("change");

// $("#daterangepicker").change(function() {
//   out(vac_start, vac_end);
// });

// $( "daterangepicker").change(daterangepicker(
//   {
//     autoApply: true,
//     locale: {
//       direction: "ltr",
//       format: "MM/DD/YYYY",
//       separator: " - ",
//       applyLabel: "Zatwierdź",
//       cancelLabel: "Anuluj",
//       fromLabel: "Od",
//       toLabel: "Do",
//       customRangeLabel: "Custom",
//       daysOfWeek: ["N", "Po", "W", "S", "C", "Pi", "S"],
//       monthNames: [
//         "Styczeń",
//         "Luty",
//         "Marzec",
//         "Kwiecień",
//         "Maj",
//         "Czerwiec",
//         "Lipiec",
//         "Sierpień",
//         "Wrzesień",
//         "Październik",
//         "Listopad",
//         "Grudzień",
//       ],
//       firstDay: 1,
//     },
//     linkedCalendars: false,
//     showCustomRangeLabel: false,
//     startDate: "01/04/2022",
//     opens: "center",
//     endDate: "01/10/2022",
//   },
  
  
  

//   function (start, end, label) {
  
//     out(start, end, label);
   
    
//    }
// ));




function out(start, end, label){
  result = countDays(start, end);
  if(result > workerData[7]){
    errorInfo.textContent = `Błąd! Masz tylko ${workerData[7]} dni urlopu. Zaznacz inny zakres dat!`;

  
    document.getElementById("submit-request").setAttribute('disabled', true);
  }
  else
  {
    correctResult = workerData[7] - result; 

    workerData[7] = correctResult;
    workerData[8] += result;

    errorInfo.textContent = `Dostępne dni urlopu po złożeniu wniosku: ${correctResult}`;   
    document.getElementById("submit-request").removeAttribute("disabled");
  }
};

// const rangePicker = document.getElementById('daterangepicker');

// rangePicker.addEventListener('change', updateState);

// function updateState() {
//   const result = countDays(start, end);
//   daysValidity(result);
// }
