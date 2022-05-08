const btnLogout = document.getElementById('btn-logout');

btnLogout.addEventListener('click', function(){
    sessionStorage.clear();
})


