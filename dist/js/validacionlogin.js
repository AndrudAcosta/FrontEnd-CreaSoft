function login(){
    
    var correodb = "amacosta@gmail.com";
    var passworddb = 1234;

    if(document.form.correo.value==correodb && document.form.password.value==passworddb){
        window.location="./dashboard.html"
    }else{
        alert("Ingrese campos validos")
    }
}