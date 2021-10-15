let arreglo=[
    {
        "correo":"yonier@gmail.com",
        "contrasena": "Y123456"
    },
    {
        "correo":"yonii@gmail.com",
        "contrasena": "L123456"
    },
    {
        "correo":"leudoi@gmail.com",
        "contrasena": "Leudo123456"
    }
]

function verificarInicioSesion(correo, contrasena) {
    console.log("Funcionando");
    var correo = document.getElementById("campoUsuarioCorreo").value
    var contrasena = document.getElementById("campoUsuarioContrasena").value
    console.log(correo, contrasena);
    var validador = "";
    for (let i = 0; i < arreglo.length; i++) {
        const element = arreglo[i];
        if (element.correo == correo  && element.contrasena == contrasena ) {
            validador = "Ingreso exitoso";
            break;
        }
        else{
            validador = "Correo ó contraseña no existe";
        }
        
    }
    alert (validador);
    
    
}

function verificarCaptcha(respuesta) {
    var respuesta = document.getElementById("enviarRespuesta").value
    if (respuesta == 1419) {
        alert("Respuesta Correcta")
    }
    else{
        alert("Respuesta incorrecta")
    }
    
}

//module.exports.arreglo = arreglo;
//module.exports.verificarInicioSesion= verificarInicioSesion;
//module.exports.verificarCaptcha = verificarCaptcha;