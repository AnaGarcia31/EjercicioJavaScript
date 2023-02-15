
function comprobarNombre(){
  let nombre = document.getElementById('nombre').value
  compruebaVacio(nombre, "nombre")
  let tieneNumeros = /\d/.test(nombre)

  if ( tieneNumeros || nombre == "" ){
    document.getElementById('nombre').classList.add('error')
    document.getElementById('nombre').classList.remove('ok')
    return false;

  } else{
    document.getElementById('nombre').classList.remove('error')
    document.getElementById('nombre').classList.add('ok')
    return true; 
 
  }

}

function comprobaremail(){
  let email = document.getElementById('email').value
  compruebaVacio(email, "email")

  let emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (! email.match(emailformat) || email == ""){
    document.getElementById('email').classList.add('error')
    document.getElementById('email').classList.remove('ok')
    return false;
 
   
  } else{
    document.getElementById('email').classList.remove('error')
    document.getElementById('email').classList.add('ok')
    return true;

    
  }
}

function comprobarpass(){
  let pass = document.getElementById('pass').value
  compruebaVacio(pass, "pass")
  if (pass.length > 8 || pass == ""){
    document.getElementById('pass').classList.add('error')
    document.getElementById('pass').classList.remove('ok')
  
    
    let passmuylarga = document.createElement("p")
    passmuylarga.setAttribute("id", "passlarga")
    passmuylarga.append("No debe tener más de 8 caracteres")
    passmuylarga.classList.add("error")
    

    if (document.getElementById("passlarga") == null){
      document.getElementById("bloquepass").appendChild(passmuylarga)
 
    }
    return false;
  } else {
    document.getElementById('pass').classList.remove('error')
    document.getElementById('pass').classList.add('ok')
  

    
    if (document.getElementById("passlarga") != null){
      document.getElementById("passlarga").remove()
    
    }
    return true;
  }

  comprobarpassconfirm()
}

function comprobarpassconfirm(){
  let pass = document.getElementById('pass').value
  let passconfirm = document.getElementById('passconfirm').value
  compruebaVacio(passconfirm, "passconfirm")
  if (pass != passconfirm || passconfirm == ""){
    document.getElementById('passconfirm').classList.add('error')
    document.getElementById('passconfirm').classList.remove('ok')
   
    
    let passdistintas = document.createElement("p")
    passdistintas.setAttribute("id", "passdistintas")
    passdistintas.append("Las constraseñas no coinciden")
    passdistintas.classList.add("error")
    if (document.getElementById("passdistintas") == null){
      document.getElementById("bloquepassconfirm").appendChild(passdistintas)
    
    }
    return false;
  } else {
    document.getElementById('passconfirm').classList.remove('error')
    document.getElementById('passconfirm').classList.add('ok')
  
    
    if (document.getElementById("passdistintas") != null){
      document.getElementById("passdistintas").remove()
        
    }
     return true;
  }

}


function procesaFormulario(){
  comprobarNombre()
  comprobaremail()
  comprobarpass()
  comprobarpassconfirm()

}

function compruebaVacio(cadena, id){
  if (cadena == ""){
    let campovacio = document.createElement("p")
    campovacio.setAttribute("id", id + "error")
    campovacio.append("Rellene este campo")
    campovacio.classList.add("error")
    if (document.getElementById(id + "error") == null){
      document.getElementById("bloque"+id).appendChild(campovacio)
    }
  } else {
    if (document.getElementById(id + "error") != null){
      document.getElementById(id + "error").remove()
    }
  }
}

function hizoClick() {


  if (comprobarNombre() && comprobaremail() && comprobarpass() && comprobarpassconfirm()) {
      alert("la inscripción ha sido correcta"); 
 
  }
} 