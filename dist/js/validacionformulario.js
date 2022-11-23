function validacion() {
    if (document.form.nombres.value == "" || document.form.apellidos.value == "" || document.form.documento.value == "" || document.form.telefono.value == "" || document.form.direccion.value == "" || document.form.correo.value == "" || document.form.password.value == "") {
        alert("Ingrese todos los campos")
    } else {
        if (document.form.telefono.value.length <= 9 || document.form.telefono.value.length >= 11) {
            alert("Ingrese un numero telefonico valido")
        } else {
            if (document.form.password.value.length <= 7) {
                alert("Ingrese una contraseña mayor a 7 digitos")
            }else {window.location="./indexlogueado.html"}
        }
    }
}



function validacionProducto() {
    if (document.form.nombre.value == "" || document.form.descripcion.value == "" || document.form.material.value == "" || document.form.stock.value == "" || document.form.tamano.value == "" || document.form.color.value == "" || document.form.precio.value == "") {
        alert("Ingrese todos los campos")
    }
}

function validacionEntrada() {
    if (document.form.producto.value == "" || document.form.fecha.value == "" || document.form.stock.value == "") {
        alert("Ingrese todos los campos")
    }
}
function validacionCliente() {
    if (document.form.nombres.value == "" || document.form.apellidos.value == "" || document.form.documento.value == "" || document.form.telefono.value == "" || document.form.direccion.value == "" || document.form.correo.value == "" || document.form.password.value == "") {
        alert("Ingrese todos los campos")
    }
}
