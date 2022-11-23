function EditarCarrito(){
    if(document.formEditarCarrito.color.value==""  || document.formEditarCarrito.cantidad.value=="" ){
        alert("Ingrese todos los campos")
    }else{
        alert("Producto Editado")
        window.location="carrito.html"
    }
}


function EditarCarritoLog(){
    if(document.formEditarCarritoLog.color.value==""  || document.formEditarCarritoLog.cantidad.value=="" ){
        alert("Ingrese todos los campos")
    }else{
        alert("Producto Editado")
        window.location="carritologueado.html"
    }
}

function ComfirmElim(){
    alert("Eliminado")
}
function ComfirmAdd(){
    alert("Agregado")
}