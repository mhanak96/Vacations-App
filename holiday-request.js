'use strict'
var scriptRequest = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

const button = document.getElementById('submit-request');



button.addEventListener('click', function(){
    document.getElementById('alert').classList.add('hidden');
    $.ajax({
        type: "POST",
        url: "holiday-request.php",
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
        
        
       
        //document.forms["form-login"].submit();
    });
});


