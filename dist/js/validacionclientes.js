function validacionCrear(){
    if(document.formcrea.nombres.value=="" || document.formcrea.apellidos.value==""  || document.formcrea.direccion.value=="" || document.formcrea.correo.value=="" || document.formcrea.telefono.value=="" ){
        alert("Ingrese todos los campos")
    }else{
        alert("Cliente creado")
        window.location="./clientes.html"
    }
}

function validacionEditar(){
    if(document.formeditar.nombres.value=="" || document.formeditar.apellidos.value==""  || document.formeditar.direccion.value=="" || document.formeditar.correo.value=="" || document.formeditar.telefono.value==""){
        alert("Ingrese todos los campos")
    }else{
        alert("Cliente Actualizado")
        window.location="./clientes.html"
    }
}
function ComfirmElim(){
    alert("Eliminado")
}