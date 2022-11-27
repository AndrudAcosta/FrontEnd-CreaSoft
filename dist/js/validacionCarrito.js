function EditarCarrito(){
    if(document.formEditarCarrito.color.value==""  || document.formEditarCarrito.cantidad.value=="" ){
        alert("Ingrese todos los campos")
    }else {
        if (document.formEditarCarrito.cantidad.value <= 0 ) {
            alert("No ingrese valores negativos")
        } else {
            alert("Producto creado")
            window.location="./carrito.html"
            } 
        }        
}


function EditarCarritoLog(){
    if(document.formEditarCarritoLog.color.value==""  || document.formEditarCarritoLog.cantidad.value=="" ){
        alert("Ingrese todos los campos")
    }else {
        if (document.formEditarCarritoLog.cantidad.value <= 0 ) {
            alert("No ingrese valores negativos")
        } else {
            alert("Producto creado")
            window.location="./carritologueado.html"
            } 
        }      
}

function ComfirmElim(){
    alert("Eliminado")
}
function ComfirmAdd(){
    alert("Agregado")
}