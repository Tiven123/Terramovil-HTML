$(document).ready(function () {
    $('#boton-login').click(function () {

        var usuarios = new Array();

        /*Obtener los datos en el LocalStorage*/
        if (localStorage.getItem('Usuarios')) {
            var usuariosN = localStorage.getItem('Usuarios');
            usuarios = JSON.parse(usuariosN);
        }

        /*Obtener datos del formulario*/
        var usuario = document.getElementById("usuario").value;
        var contrasena = document.getElementById("contrasenna").value;
        var c = false;
        /*Verificar Usuario*/
        for (var i = 0; i < usuarios.length; i++) {
            if ((usuarios[i][8] == usuario) && (usuarios[i][9]) == contrasena) {
                alert("Bienvenido");
                sessionStorage.setItem("Nombre", usuarios[i][0]);
                sessionStorage.setItem("Usuario", usuarios[i][9]);
                c = true;
                window.location = "info.html";
                break;
            }
        }
        if (c == false) {
            alert("Verifique los datos");
        }
    });
});
