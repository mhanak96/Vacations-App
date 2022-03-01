['use strict']

console.log('Dane zalogowanego użytkownika:');
console.log(pausecontent);
console.log('Historia wniosków danego użytkownika:');
console.log(table);
console.log('Historia wniosków pracowników podlegających kierownikowi:');
console.log(tableWorkersThird);




const welcome = document.getElementById('welcome');
const panelName = document.getElementById('panel-name');
const panelVacation = document.getElementById('vacation-left');
const panelUsed = document.getElementById('vacation-used'); 
const modal3 = document.querySelector(".modal3");

/*----------------------------------------------------*/

welcome.textContent = `${pausecontent[1]} ${pausecontent[2]}`;
panelName.textContent = `${pausecontent[1]} ${pausecontent[2]}`;
panelVacation.textContent = pausecontent[7];
panelUsed.textContent = `In progress`;

/*
function Insert_Data() {
    var tableData = document.getElementById("datas");
    tableData.innerHTML="";
    var tr="";
    tableLocal.forEach(x=>{
       tr+='<tr>';
       tr+='<td>'+x[1]+'</td>'+'<td>'+x[2]+'</td>'+'<td>'+x[3]+'</td>';
       tr+='</tr>';
  
    })
    table.innerHTML+=tr;
    //Help......  
  }

  Insert_Data();

  */

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

//Insert data function
function Insert_Data() {
 var tableInsert = document.getElementById("datas");
 tableInsert.innerHTML="";
 var tr="";
 table.forEach(x=>{
    tr+='<tr>';
    tr+='<td>'+x.type+'</td>'+'<td>'+`od ${x.start_date} do ${x.end_date}`+'</td>'+'<td>'+x.replacement+'</td>'+`<td class="status-info ${statusValidate(x.status)}">`+x.status+'</td>'
    tr+='</tr>'

 })
 tableInsert.innerHTML+=tr;
 //Help......  
}


function Insert_Data_Workers() {
   var tableInsertWorkers = document.getElementById("datas_works");
   tableInsertWorkers.innerHTML="";
   var trs="";
   tableWorkersThird.forEach(x=>{
      trs+='<tr>';
      trs+='<td>'+x[2]+'</td>'+'<td>'+x[3]+'</td>'+'<td>'+`od ${x[4]} do ${x[5]}`+'</td>'+'<td>'+x[6]+'</td>'+`<td class="status-action ${statusValidate(x[8])}" onclick="applicationReview(${x[0]})">`+x[8]+'</td>'
      trs+='</tr>'
  
   })
   tableInsertWorkers.innerHTML+=trs;
   //Help......  
  }


  //


const statusInf = document.querySelectorAll("status-action");

const applicationReview = function(x){
   console.log(`Kliknięto na wniosek nr ${x}`);
   

}

function clicked2(){
   console.log('clicked');
}


//console.log(statusInf);















//statusInft_Data();
Insert_Data();
Insert_Data_Workers();



// $('#logout').click(function() {
//    var request = $.ajax({
//        url: "logout.php",
//        type: "GET"
//    });

//    request.done(function(msg) {
//       header("http://localhost/vacations/index.php");
//    });

//    request.fail(function(jqXHR, textStatus) {
//        alert("Error on Logging Out");
//    });
// });