function validatepass(){
    let expresionregular = document.getElementById("Regularexpresion").value;
    let password = document.getElementById("Password").value;
    let resultado = document.getElementById("resultado");
    if(!password.search(expresionregular)){
        resultado.value=password.match(expresionregular)
        setTimeout(function(){ alert("Contraseña valida"); }, 100);
    }
    else{
        resultado.value="ERROR";
        setTimeout(function(){ alert("La contraseña no cumple con los requisitos"); }, 100);
    }
}
