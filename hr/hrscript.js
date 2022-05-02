['use strict']
console.log(workersApp);


const welcome = document.getElementById('welcome');
const panelName = document.getElementById('panel-name');
const panelVacation = document.getElementById('vacation-left');
const panelUsed = document.getElementById('vacation-used'); 
const modal3 = document.querySelector(".modal3");
const modal4 = document.querySelector('.modal4');
var errorInfo = document.getElementById('error'); 
const position = document.getElementById('panel-position');
const logout = document.getElementById('panel-position');


   




welcome.textContent = `Witaj ${hrData[1]}!`;
panelName.textContent = `${hrData[1]} ${hrData[2]}`;
panelVacation.textContent = `Pozostało ${hrData[7]} dni urlopu`;
panelUsed.textContent = `Wykorzystano ${hrData[8]} dni urlopu`;
position.textContent = `${hrData[9]}`;

welcome.textContent = `Witaj ${hrData[1]}!`;
panelName.textContent = `${hrData[1]} ${hrData[2]}`;


if (sessionStorage.getItem('tempCorrectResult') == null){
   panelVacation.textContent = `Pozostało ${hrData[7]} dni do wykorzystania`;
   panelUsed.textContent = `Wykorzystano ${hrData[8]} dni urlopu`;
}
else{
    panelVacation.textContent = `Pozostało ${sessionStorage.getItem('tempCorrectResult')} dni do wykorzystania`;
    panelUsed.textContent = `Wykorzystano ${parseInt(hrData[8]) + parseInt(sessionStorage.getItem('tempVacOn'))} dni urlopu`;
    hrData[7] = sessionStorage.getItem('tempCorrectResult');
    hrData[8] = sessionStorage.getItem('tempVacOn');
}





let statusValidate = function(status){
   if(status === 'Zaakceptowane'){
      return 'sacc';
   }
   else if(status === 'Odrzucono przez Kierownika'){
      return 'sref';
   }
   else if(status === 'Odrzucono przez HR'){
      return 'sref';
   }
   else if(status === 'Oczekuje na akceptacje HR'){
      return 'slea';
   }
   else{
      return 'swai';
   }
   
};
 
function Insert_Data() {
    var tableInsert2 = document.getElementById("datas");
    tableInsert2.innerHTML="";
    var tr="";
    table.forEach(x=>{
       tr+='<tr>';
       tr+='<td>'+x.application_id+'</td>'+'<td>'+x.type+'</td>'+'<td>'+`od ${x.start_date} do ${x.end_date}`+'</td>'+'<td>'+x.replacement+'</td>'+`<td class="status-info ${statusValidate(x.status)}">`+x.status+'</td>'
       tr+='</tr>'
   
    })
    tableInsert2.innerHTML+=tr;
    //Help......  
   }

   function Insert_Data_Workers() {
    var tableInsertWorkers = document.getElementById("datas_works");
    tableInsertWorkers.innerHTML="";
    var trs="";
    workersApp.forEach(x=>{
       trs+='<tr>';
       trs+='<td>'+x[2]+'</td>'+'<td>'+x[3]+'</td>'+'<td>'+`od ${x[4]} do ${x[5]}`+'</td>'+'<td>'+x[6]+'</td>'+`<td class="status-action ${statusValidate(x[8])}" onclick="applicationReview(${x[0]})">`+x[8]+'</td>'
       trs+='</tr>'
   
    })
    tableInsertWorkers.innerHTML+=trs;
    //Help......  
   }

   Insert_Data();
   Insert_Data_Workers();

   

   errorInfo.textContent = `Dostępne dni urlopu: ${hrData[7]}`;

const options = document.getElementById("deputy");

for(let i =0; i < collegues.length; i++){
   let option = document.createElement("OPTION"),
   txt = document.createTextNode(collegues[i]);
   option.appendChild(txt);
   options.insertBefore(option,options.lastChild);
}


var rescopy = "";
 
const applicationReview = function(x){

     
   const petitionNumber = document.getElementById('number');
   const petitionNumber2 = document.getElementById('number2');

   document.cookie = `clickedID=${x}`;

   function getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }

    let cookieValue = getCookie("clickedID");

    console.log(cookieValue);
   
    var ajax = new XMLHttpRequest();

    ajax.open("GET", "appdecision.php", true); 	
    ajax.send();

    ajax.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var response = JSON.parse(this.responseText);
           const mName = document.getElementById('modal3-name');
           const mTime = document.getElementById('modal3-time');
           const mDeputy = document.getElementById('modal3-deputy');
           const mType = document. getElementById('modal3-type');

         // second
         const mName2 = document.getElementById('modal4-name');
         const mTime2 = document.getElementById('modal4-time');
         const mDeputy2 = document.getElementById('modal4-deputy');
         const mType2 = document. getElementById('modal4-type');


         rescopy = Object.keys(response).map((key) => [Number(key), response[key]]);;
          
         
          
           mName.textContent = `Imię i nazwisko: ${rescopy[0][1][2]}`;
           mTime.textContent = `${rescopy[0][1][4]} - ${rescopy[0][1][5]}`; 
           mDeputy.textContent = rescopy[0][1][6];
           mType.textContent = rescopy[0][1][3]; 

           mName2.textContent = `Imię i nazwisko: ${rescopy[0][1][2]}`;
           mTime2.textContent = `${rescopy[0][1][4]} - ${rescopy[0][1][5]}`; 
           mDeputy2.textContent = rescopy[0][1][6];
           mType2.textContent = rescopy[0][1][3]; 

          console.log(response);
          console.log(typeof(response));
          //document.cookie = 'clickedID=0';
          cookieValue = getCookie("clickedID");
          console.log(cookieValue);

          if(rescopy[0][1][8] != "Oczekuje na akceptacje HR"){
            modal4.classList.remove('hidden');
            }
         else{
            modal3.classList.remove('hidden');
         }
         
      }
  };

 
 

   
    petitionNumber.textContent = cookieValue; 
    petitionNumber2.textContent = cookieValue; 
    
    










    $.ajax({
      type: "GET",
      url: "appdecision.php",
      data: {
          cookie: cookieValue
      }
  })
  .done(function (msg) {
      //alert("Data Saved: " + msg);
      switch(msg){
          case "correct":
              document.forms["form-login"].submit();
          break;
          case "incorrect":
              document.getElementById('alert').classList.remove('hidden');
              document.getElementById('error').textContent = "Błędne dane logowania";
          break;
          case "error":
              document.getElementById('error').textContent = "Nieznany bład";
          break;
          default:
              document.getElementById('error').textContent = "Error!!!";
      }
   });

 

  
  
  

   

  
 



   
   
   // statusInf.forEach((btn) =>
   //   btn.addEventListener("click", () =>
   //     btn.id === "modal-btn"
   //       ? (modal.style.display = "block")
   //       : (modal2.style.display = "block")
   //   )
   // );
   
   // windowsClose.forEach((btn) =>
   //   btn.addEventListener("click", () =>
   //     btn.id === "close"
   //       ? (modal.style.display = "none")
   //       : (modal2.style.display = "none")
   //   )
   // );
   
   // const modal2 = document.querySelector(".modal2"); 

   // (modal2.style.display = "block");



   console.log(`Kliknięto na wniosek nr ${x}`);
   //sprawdzić czy zawiera klasę 

   

}




const buttonAccept = document.getElementById('btn-accept');
const buttonDecline = document.getElementById('btn-decline');

buttonAccept.addEventListener('click', function(){
   $.ajax({
       type: "POST",
       url: "decision-approve.php",
       data: {
           vacation: document.getElementById('vacation').value,
           datepicker: document.getElementById('daterangepicker').value,
           deputy: document.getElementById('deputy').value,
           comment: document.getElementById('comment').value
       }
   })
   .done(function (msg) {
       //alert("Data Saved: " + msg);
       switch(msg){
           case "correct":
               document.forms["request-form"].submit();
               window.location.reload(true);
           break;
           case "incorrect":
               document.getElementById('alert').classList.remove('hidden');
               document.getElementById('error').textContent = "Błędne dane logowania";
           break;
           case "error":
               document.getElementById('error').textContent = "Nieznany bład";
           break;
           default:
               document.getElementById('error').textContent = "Correct2!";
               window.location.reload(true);
       }
       
       
      // window.location.reload(true);
       //document.forms["form-login"].submit();
   });
});

buttonDecline.addEventListener('click', function(){
 
   $.ajax({
       type: "POST",
       url: "decision-decline.php",
       data: {
           vacation: document.getElementById('vacation').value,
           datepicker: document.getElementById('daterangepicker').value,
           deputy: document.getElementById('deputy').value,
           comment: document.getElementById('comment').value
       }
   })
   .done(function (msg) {
    //    alert("Data Saved: " + msg);
       switch(msg){
           case "correct":
               document.forms["request-form"].submit();
               window.location.reload(true);
           break;
           case "incorrect":
               document.getElementById('alert').classList.remove('hidden');
               document.getElementById('error').textContent = "Błędne dane logowania";
           break;
           case "error":
               document.getElementById('error').textContent = "Nieznany bład";
           break;
           default:
               document.getElementById('error').textContent = "Correct2!";
               window.location.reload(true);
       }
       
       
       //window.location.reload(true);
       //document.forms["form-login"].submit();
   });
});