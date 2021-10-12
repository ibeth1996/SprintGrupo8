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

    function ordenarRegistros(arreglo2){
        arreglo2.sort(function(a,b){
            if (a.nombre > b.nombre) {
                return 1;
            }
            if (a.nombre < b.nombre) {
                return -1;
        }return 0;
        });
        console.log(arreglo2);
        
        }
    

    
       

module.exports.arreglo = arreglo;
module.exports.almacenarRegistros = almacenarRegistros;
module.exports.ordenarRegistros = ordenarRegistros;