function AgregarCarritoLog(){
    if(document.formAgregarlog.tamano.value=="" || document.formAgregarlog.color.value==""  || document.formAgregarlog.cantidad.value=="" ){
        alert("Ingrese todos los campos")
    }else{
        alert("Producto agregado")
        window.location="./carritologueado.html"
    }
}

function AgregarCarrito(){
    if(document.formAgregar.tamano.value=="" || document.formAgregar.color.value==""  || document.formAgregar.cantidad.value=="" ){
        alert("Ingrese todos los campos")
    }else{
        alert("Producto agregado")
        window.location="./carrito.html"
    }
}



function AgregarInstant(){
    alert("Producto agregado")
}