const windowsBtn = document.querySelectorAll(".btn2");
const windowsClose = document.querySelectorAll(".close-btn");
const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");

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
    console.log(
      "New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')"
    );
  }
);