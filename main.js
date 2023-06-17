const form = document.getElementById("my-form");
const button = document.getElementById("btn-validar");
const campoA = document.getElementById("campoA");
const campoB = document.getElementById("campoB");
const containerResult = document.querySelector(".result-message");
const containerValueA = document.querySelector(".error-message-campoA");
const containerValueB = document.querySelector(".error-message-campoB");


const mensagemCampoIguais = "Erro! o valor do campo A e do campo B são iguais";

function maiorCampoB() {
  let result = (Number(campoA.value) <Number(campoB.value)) ? true : false;
  return result;
}

function valoresDiferentes() {
  if(Number(campoA.value) !== Number(campoB.value)){
    return true;
  } else {
    return false;
  }
}

function validaCampoA() {
  if(campoA.value.length < 1) {
    document.querySelector('.error-message-campoA').style.display = "block";
    campoA.style.border = "1px solid red"; 
    return false;
  } 
  return true;
}

function validaCampoB() {
  if(campoB.value.length < 1) {
    document.querySelector('.error-message-campoB').style.display = "block";
    campoB.style.border = "1px solid red";
    return false;
  }
  return true; 
}

function resetErrors() {
  containerResult.style.display = "none";
  containerResult.classList.remove("result-message-success")
  containerResult.classList.remove("result-message-invalid")
  document.querySelector('.error-message-campoA').style.display = "none";
  document.querySelector('.error-message-campoB').style.display = "none";
}

campoA.addEventListener('keyup', function(e){
  if(campoA.value.length >= 1) {
    campoA.style = "";
    document.querySelector('.error-message-campoA').style.display = "none";
  } else {
    containerResult.style.display = "none";
    containerResult.classList.remove("result-message-success")
    containerResult.classList.remove("result-message-invalid")
  }
})

campoA.addEventListener('input', function(e){
  if(campoA.value.length >= 1) {
    campoA.style = "";
    document.querySelector('.error-message-campoA').style.display = "none";
  } 
  resetErrors();
})

campoB.addEventListener('keyup', function(e){
  if(campoB.value.length >= 1) {
    campoB.style = "";
    document.querySelector('.error-message-campoB').style.display = "none";
    //return true;
  } else {
    containerResult.style.display = "none";
    containerResult.classList.remove("result-message-success")
    containerResult.classList.remove("result-message-invalid")
  } 
})

campoB.addEventListener('input', function(e){
  if(campoB.value.length >= 1) {
    campoB.style = "";
    document.querySelector('.error-message-campoB').style.display = "none";
  } 
  resetErrors();
})

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const mensagemSucesso = "Sucesso! O valor do campo B é <b>maior</b> que o valor do campo A";
  const mensagemInvalido = "Invalido! O valor do campo B é <b>menor</b> que o valor do campo A"

  if(!valoresDiferentes()) {
    containerValueA.innerHTML = mensagemCampoIguais;
    document.querySelector('.error-message-campoA').style.display = "block";
    containerValueA.classList.add("error-message-campoA");
    containerValueB.innerHTML = mensagemCampoIguais;
    document.querySelector('.error-message-campoB').style.display = "block";
    containerValueB.classList.add("error-message-campoA");
    return;  
  } else {
    resetErrors();
  }

  if(validaCampoA() && validaCampoB()){
    if(maiorCampoB()) {
      containerResult.innerHTML = mensagemSucesso;
      containerResult.style.display = "block";
      containerResult.classList.add("result-message-success")
    } else {
      containerResult.innerHTML = mensagemInvalido;
      containerResult.style.display = "block";
      containerResult.classList.add("result-message-invalid")
    }
  }
})


