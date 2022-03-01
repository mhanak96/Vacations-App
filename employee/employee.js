['use strict']

console.log(workerData);
console.log(table);
console.log(collegues);

const welcome = document.getElementById('welcome');
const panelName = document.getElementById('panel-name');
const panelVacation = document.getElementById('vacation-left');
const panelUsed = document.getElementById('vacation-used'); 

welcome.textContent = `Witaj ${workerData[1]}!`;
panelName.textContent = `${workerData[1]} ${workerData[2]}`;
panelVacation.textContent = `Pozostało ${workerData[7]} dni do wykorzystania`;
panelUsed.textContent = `Wykorzystano ${workerData[7]}`;

let statusValidate = function(status){
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

   Insert_Data();