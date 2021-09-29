function validar_correo(correo){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if ((correo.length >= 15) && (correo.length <= 40) && (correo.match(mailformat))){
        alert("La dirección de email " + correo + " es correcta.");
        
        return true;
    } else {
        alert("La dirección de correo es incorrecta");
        return false; 
    }
}

function validar_contrasena_usuario(contrasena){
    
    if (contrasena.length >=6 && contrasena.length <=12 && (contrasena.charAt(0) === contrasena.charAt(0).toUpperCase())) {
            return true;
    }else{
        return false;
        
    }
}

module.exports.validar_correo = validar_correo;
module.exports.validar_contrasena_usuario = validar_contrasena_usuario;