function AgregarCarritoLog(){
    if(document.formAgregarlog.tamano.value=="" || document.formAgregarlog.color.value==""  || document.formAgregarlog.cantidad.value=="" ){
        alert("Ingrese todos los campos")
    } else {
        if (document.formAgregarlog.cantidad.value <= 0 ) {
            alert("No ingrese valores negativos")
        } else {
            alert("Producto creado")
            window.location="./carritologueado.html"
            } 
        }        
}

function AgregarCarrito(){
    if(document.formAgregar.tamano.value=="" || document.formAgregar.color.value==""  || document.formAgregar.cantidad.value=="" ){
        alert("Ingrese todos los campos")
    }else {
        if (document.formAgregar.cantidad.value <= 0 ) {
            alert("No ingrese valores negativos")
        } else {
            alert("Producto creado")
            window.location="./carrito.html"
            } 
        }        
}
 


function AgregarInstant(){
    alert("Producto agregado")
}