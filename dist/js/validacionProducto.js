function validacionCrear(){
    if(document.formcrea.nombre.value=="" || document.formcrea.descripcion.value==""  || document.formcrea.material.value=="" || document.formcrea.stock.value=="" || document.formcrea.tamano.value=="" || document.formcrea.color.value=="" || document.formcrea.precio.value==""){
        alert("Ingrese todos los campos")
    }else{
        alert("Producto creado")
        window.location="./productos.html"
    }
}

function validacionEditar(){
    if(document.formeditar.nombre.value=="" || document.formeditar.descripcion.value==""  || document.formeditar.material.value=="" || document.formeditar.stock.value=="" || document.formeditar.tamano.value=="" || document.formeditar.color.value=="" || document.formeditar.precio.value=="" ){
        alert("Ingrese todos los campos")
    }else{
        alert("Producto Actualizado")
        window.location="./productos.html"
    }
}

function validacionCrearE(){
    if(document.formcreaE.producto.value=="" || document.formcreaE.fecha.value==""   || document.formcreaE.stock.value==""){
        alert("Ingrese todos los campos")
    }else{
        alert("Entrada creada")
        window.location="./productos.html"
    }
}


