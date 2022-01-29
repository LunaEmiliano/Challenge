var mensajeIngresado = document.getElementById("input-texto");
var botonEncriptar = document.getElementById("btn-encriptar");
var botonDesencriptar = document.getElementById("btn-desencriptar");
var salida = document.getElementById("msg");
var botonCopiar = document.getElementById("btn-copy");

function reemplazar(){
  validarInput();
  if(!valido){
    salida.value = "";
    mensajeIngresado.value = "";
    alert("Evita los números, caracteres especiales y mayúsculas. Harán que tu mensaje sea más vulnerable");
  }
  var convertido = mensajeIngresado.value.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
  if(convertido != ""){
    var mostrarTexto = document.getElementById("msg");
    mostrarTexto.value = convertido;
    mensajeIngresado.focus();
  }
}

function desencriptar(){
  var mensajeIngresado = document.getElementById("input-texto").value;
  var convertido = mensajeIngresado.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
  if(convertido != ""){
    var mostrarTexto = document.getElementById("msg");
    mostrarTexto.value = convertido;
  }
}

var valido = true;
function validarInput(){
  var regExp = /^[a-z0-9\s]+$/;
  if(!regExp.test(mensajeIngresado.value)){
    mensajeIngresado.value = "";
    valido = false;
    window.location.reload();
  }
}

function copiarTexto(){

}

mensajeIngresado.focus();
botonEncriptar.onclick = reemplazar;
botonDesencriptar.onclick = desencriptar;
//.onclick = copiar;

botonCopiar.addEventListener("click", function(evento){
  evento.preventDefault();
  salida.select();
  document.execCommand("copy");
})