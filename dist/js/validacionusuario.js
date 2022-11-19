function validacionCrear(){
    if(document.formcrea.nombres.value=="" || document.formcrea.apellidos.value==""  || document.formcrea.documento.value=="" || document.formcrea.telefono.value=="" || document.formcrea.correo.value=="" || document.formcrea.password.value=="" || document.formcrea.rol.value==""){
        alert("Ingrese todos los campos")
    }else{
        alert("Usuario creado")
        window.location="./usuarios.html"
    }
}

function validacionEditar(){
    if(document.formeditar.nombres.value=="" || document.formeditar.apellidos.value==""  || document.formeditar.documento.value=="" || document.formeditar.telefono.value=="" || document.formeditar.correo.value=="" || document.formeditar.rol.value==""){
        alert("Ingrese todos los campos")
    }else{
        alert("Usuario Actualizado")
        window.location="./usuarios.html"
    }
}
