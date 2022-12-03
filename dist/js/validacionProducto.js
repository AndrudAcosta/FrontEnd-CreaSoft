function validacionCrear(){
    if(document.formcrea.nombre.value=="" || document.formcrea.descripcion.value==""  || document.formcrea.material.value=="" || document.formcrea.stock.value=="" || document.formcrea.tamano.value=="" || document.formcrea.color.value=="" || document.formcrea.precio.value==""){
        alert("Ingrese todos los campos")
    }else {
        if (document.formcrea.stock.value <= 0 ||document.formcrea.precio.value <= 0) {
            alert("No ingrese valores negativos")
        } else {
            alert("Producto agregado")
           
            } 
        }
    }
   


function validacionEditar(){
    if(document.formeditar.nombre.value=="" || document.formeditar.descripcion.value==""  || document.formeditar.material.value=="" ||  document.formeditar.tamano.value=="" || document.formeditar.color.value=="" || document.formeditar.precio.value=="" ){
        alert("Ingrese todos los campos")
    }else {
        if (document.formeditar.precio.value <= 0 ) {
            alert("No ingrese valores negativos")
        } else {
            alert("Producto creado")
            window.location="./productos.html"
            } 
        }
    }
 
function validacionCrearE(){
    if(document.formcreaE.producto.value=="" || document.formcreaE.fecha.value==""   || document.formcreaE.stock.value==""){
        alert("Ingrese todos los campos")
    }else {
        if (document.formcreaE.stock.value <= 0 ) {
            alert("No ingrese valores negativos")
        } else {
            alert("Entrada agregada")
            }
        }
    }
    function chequeo(){
        if(document.getElementById("customswitch").checked){
            document.getElementById("estado").
            textContent = "Activo"
        }else{
            document.getElementById("estado").
            textContent = "Inactivo"
        }
    }
    
function AgregarEntrada(){
    alert("Entradas creadas")
    window.location="./productos.html"
    }
    
function AgregarProducto(){
    alert("Productos creados")
    window.location="./productos.html"
    }
    

function ComfirmElim(){
    alert("Eliminado")
}

