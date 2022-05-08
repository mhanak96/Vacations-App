['use strict']

//deklracje zmiennych
const welcome = document.getElementById('welcome');
const panelName = document.getElementById('panel-name');
const panelVacation = document.getElementById('vacation-left');
const errorInfo = document.getElementById('error'); 
const position = document.getElementById('panel-position');

//ukrycie hasła
workerData[4] = "***";

//DOM paneli
welcome.textContent = `Witaj ${workerData[1]}!`;
panelName.textContent = `${workerData[1]} ${workerData[2]}`;
panelVacation.textContent = `Pozostało ${workerData[7]} dni urlopu`;
position.textContent = `${workerData[9]}`;


   // Aktualizacja danych po złożeniu wniosku
   if (sessionStorage.getItem('tempCorrectResult') == null){
      panelVacation.textContent = `Pozostało ${workerData[7]} dni do wykorzystania`;
   }
   else{
      panelVacation.textContent = `Pozostało ${sessionStorage.getItem('tempCorrectResult')} dni do wykorzystania`;
      workerData[7] = sessionStorage.getItem('tempCorrectResult');
   }



//"Kolorowanie" wniosków ze względu na ich status 
let statusValidate = function(status){
    if(status === 'Zaakceptowane'){
       return 'sacc';
    }
    else if(status === 'Odrzucono przez Kierownika' || status === 'Odrzucono przez HR'){
       return 'sref';
    }
    else if(status === 'Oczekuje na akceptacje HR'){
       return 'slea';
    }
    else{
       return 'swai';
    }
    
 };
 
//Ladowanie historii wniosków
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
   }

errorInfo.textContent = `Dostępne dni urlopu: ${workerData[7]}`;   

Insert_Data();

//Ladowanie kolegów z pracy przy wybieraniu wniosku urlopowego

const options = document.getElementById("deputy");

for(let i =0; i < collegues.length; i++){
   let option = document.createElement("OPTION"),
   txt = document.createTextNode(collegues[i]);
   option.appendChild(txt);
   options.insertBefore(option,options.lastChild);
}