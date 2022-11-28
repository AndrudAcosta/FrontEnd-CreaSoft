function validacionCrear() {
    if (document.formcrea.nombres.value == "" || document.formcrea.apellidos.value == "" || document.formcrea.documento.value == "" || document.formcrea.telefono.value == "" || document.formcrea.correo.value == "" || document.formcrea.password.value == "" || document.formcrea.rol.value == "") {
        alert("Ingrese todos los campos")
    } else {
        if (document.formcrea.password.value !== document.formcrea.rpassword.value) {
            alert("Las contraseñas no coinciden")
        } else {
            if (document.formcrea.telefono.value.length <= 9 || document.formcrea.telefono.value.length >= 11) {
                alert("Ingrese un numero telefonico valido")
            } else {
                if (document.formcrea.password.value.length <= 7) {
                    alert("Ingrese una contraseña mayor a 7 digitos")
                } else {
                    alert("Usuario creado")
                    window.location = "./usuarios.html"
                }
            }
        }
    }
}

function chequeo() {
    if (document.getElementById("customswitch").checked) {
        document.getElementById("estado").
            textContent = "Activo"
    } else {
        document.getElementById("estado").
            textContent = "Inactivo"
    }
}

function chequeo2() {
    if (document.getElementById("customswitch2").checked) {
        document.getElementById("estado2").
            textContent = "Activo"
    } else {
        document.getElementById("estado2").
            textContent = "Inactivo"
    }
}

function validacionEditar() {
    if (document.formeditar.nombres.value == "" || document.formeditar.apellidos.value == "" || document.formeditar.documento.value == "" || document.formeditar.telefono.value == "" || document.formeditar.correo.value == "" || document.formeditar.rol.value == "") {
        alert("Ingrese todos los campos")
    } else {
        if (document.formcrea.telefono.value.length <= 9 || document.formcrea.telefono.value.length >= 11) {
            alert("Ingrese un numero telefonico valido")
        } else {
            alert("Usuario Actualizado")
            window.location = "./usuarios.html"
        }
    }
}

function validacioneliminar() {
    alert("Eliminado con exito")
}

function validacionEditarPerfil() {
    if (document.perfil.nombres.value == "" || document.perfil.apellidos.value == "" || document.perfil.documento.value == "" || document.perfil.telefono.value == "" || document.perfil.correo.value == "" || document.perfil.direccion.value == "") {
        alert("Ingrese todos los campos")
    } else {
        if (document.perfil.telefono.value.length <= 9 || document.perfil.telefono.value.length >= 11) {
            alert("Ingrese un numero telefonico valido")
        } else {
            alert("Perfil Actualizado")
            window.location = "./miperfiladmin.html"
        }
    }
}

function validacionEditarPerfilC() {
    if (document.cliente.nombres.value == "" || document.cliente.apellidos.value == "" || document.cliente.documento.value == "" || document.cliente.telefono.value == "" || document.cliente.correo.value == "" || document.cliente.direccion.value == "") {
        alert("Ingrese todos los campos")
    } else {
        if (document.cliente.telefono.value.length <= 9 || document.cliente.telefono.value.length >= 11) {
            alert("Ingrese un numero telefonico valido")
        } else {
            alert("Perfil Actualizado")
            window.location = "./miperfilcliente.html"
        }
    }
}

function sololetras(e){
    key=e.keyCode || e.which;

    teclado=String.fromCharCode(key).toLowerCase();

    letras=" abcdefghijklmnñopqrstuvwzyx";

    especiales="8-37-38-46-164";

    teclado_especial=false;

    for(var i in especiales){
        if(key==especiales[i]){
            teclado_especial=true;break
        }
    }

    if(letras.indexOf(teclado) ==-1 && !teclado_especial){
        return false;
    }

}
