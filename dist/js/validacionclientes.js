function validacionCrear(){
    if(document.formcrea.nombres.value=="" || document.formcrea.apellidos.value==""  || document.formcrea.direccion.value=="" || document.formcrea.correo.value=="" || document.formcrea.telefono.value=="" ){
        alert("Ingrese todos los campos")
    }else {
        if (document.formcrea.telefono.value.length <= 9 || document.formcrea.telefono.value.length >= 11) {
            alert("Ingrese un numero telefonico de 10 dijitos")
        }else {
            alert("Usuario creado")
            window.location = "./clientes.html"
        }       
    }
}

function validacionEditar(){
    if(document.formeditar.nombres.value=="" || document.formeditar.apellidos.value==""  || document.formeditar.direccion.value=="" || document.formeditar.correo.value=="" || document.formeditar.telefono.value==""){
        alert("Ingrese todos los campos")
    }else {
        if (document.formeditar.telefono.value.length <= 9 || document.formeditar.telefono.value.length >= 11) {
            alert("Ingrese un numero telefonico de 10 dijitos")
        }else {
            alert("Usuario creado")
            window.location = "./clientes.html"
        }       
    }
}

function cambio(){

    if(document.getElementById("switch").Checked){
        document.getElementById("estado").
        textContent="Activo"
    }else{
        document.getElementById("estado").
        textContent="Inactivo"
    }
}





function ComfirmElim(){
    alert("Eliminado")
} 