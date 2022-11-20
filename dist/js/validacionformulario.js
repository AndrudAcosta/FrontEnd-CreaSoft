function validacion(){
    if(document.form.nombres.value=="" || document.form.apellidos.value==""  || document.form.documento.value=="" || document.form.telefono.value=="" || document.form.direccion.value=="" || document.form.correo.value=="" || document.form.password.value==""){
        alert("Ingrese todos los campos")
    }else{
        window.location="./indexlogueado.html"
    }
}