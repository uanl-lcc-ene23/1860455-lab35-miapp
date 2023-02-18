//Archivo javascript

let usuarioTXT = document.getElementById("usuario");
let passwordTXT = document.getElementById("password")

let p = document.getElementById("mensaje");

function login(){
    //Login aqui
    p.innerHTML = "Login correcto " + usuarioTXT.value;

    limpiar();
}

function registro(){
    //Regitro aqui
    p.innerHTML = "Registro correcto " + usuarioTXT.value;

    limpiar();
}

function limpiar(){
    usuarioTXT.value = "";
    passwordTXT.value = "";
}

function togglePsw(){
//cambiar atributo type
//cambiar texto del span

}