function validarcrearrol(){
    if(document.formcrearrol.nombre.value==""){
        alert("Ingrese todos los campos please")
    }else{
        alert("Usuario creado")
        window.location="./roles.html"
    }
}

function validareditarrol(){
    if(document.editarrol.nombre.value==""){
        alert("Ingrese todos los campos")
    }else{
        alert("Rol Actualizado")
        window.location="./roles.html"
    }
}
