'use strict'


const button = document.getElementById('submit-request');



button.addEventListener('click', function(){

  

    document.getElementById('alert').classList.add('hidden');
    $.ajax({
        type: "POST",
        url: "holiday-request-worker.php",
        data: {
            vacation: document.getElementById('vacation').value,
            datepicker: document.getElementById('daterangepicker').value,
            deputy: document.getElementById('deputy').value,
            comment: document.getElementById('comment').value,
            vacTotal: correctResult,
            vacOn: result
        }
    })
    .done(function (msg) {
        alert("Data Saved: " + msg);
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
        
        
        window.location.reload(false);
        //window.location.replace("http://localhost/vacations/employee/employee.php");
        //document.forms["form-login"].submit();
    });
});
