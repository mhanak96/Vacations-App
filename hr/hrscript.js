['use strict']
console.log(workersApp);

const welcome = document.getElementById('welcome');
const panelName = document.getElementById('panel-name');
const panelVacation = document.getElementById('vacation-left');
const panelUsed = document.getElementById('vacation-used'); 

welcome.textContent = `Witaj ${hrData[1]}!`;
panelName.textContent = `${hrData[1]} ${hrData[2]}`;
panelVacation.textContent = `Pozostało ${hrData[7]} dni do wykorzystania`;
panelUsed.textContent = `In progress`;

const statusValidate = function(status){
    if(status === 'Zaakceptowane'){
       return 'sacc';
    }
    else if(status === 'Odrzucono'){
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
       tr+='<td>'+x.type+'</td>'+'<td>'+`od ${x.start_date} do ${x.end_date}`+'</td>'+'<td>'+x.replacement+'</td>'+`<td class="status-info ${statusValidate(x.status)}">`+x.status+'</td>'
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