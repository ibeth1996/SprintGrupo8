let arreglo = []

function almacenarRegistros(){
    let objecto = {
        'nombre': document.getElementById('campoNombre').value,
        'contrasena': document.getElementById('campoContrasena').value,
        'correo': document.getElementById('campoCorreo').value,
        'confirmacioncorreo': document.getElementById('campoConfirmacionCorreo').value,
        'telefono': document.getElementById('campoTelefono').value
    }
    if (arreglo.length < 30){
        arreglo.push(objecto);
        
        console.log(arreglo);
    }else{
        alert("Arreglo lleno");
        ordenarRegistros(arreglo);
        
    }
}

function verificarInicioSesion(correo, contrasena) {
    var correo = document.getElementById("campoUsuarioCorreo").value
    var contrasena = document.getElementById("campoUsuarioContrasena").value
    var validador = "";
    for (let i = 0; i < arreglo.length; i++) {
        const element = arreglo[i];
        if (element.correo == correo  && element.contrasena == contrasena ) {
            validador = prompt("¿Cuanto es 33x43?");
            if(validador != null){
                verificarCaptcha(validador)
            }
            break;
        }
        else{
            alert("Correo ó contraseña no existe");
        }
        
    }
   
    
    
}

function verificarCaptcha(respuesta) {
    if (respuesta == 1419) {
        alert("Respuesta Correcta")
    }
    else{
        alert("Respuesta incorrecta")
    }   
}

module.exports.arreglo = arreglo;
module.exports.almacenarRegistros = almacenarRegistros;
module.exports.verificarInicioSesion= verificarInicioSesion;
module.exports.verificarCaptcha = verificarCaptcha;