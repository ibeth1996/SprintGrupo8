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
    }
}

function ordenarRegistros(args){

}

//module.exports.arreglo = arreglo;
//module.exports.almacenarRegistros = almacenarRegistros;
//module.exports.ordenarRegistros = ordenarRegistros;