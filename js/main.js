$(document).ready(function(){

  $('#telefone').mask('(00) 00000-0000', {
    placeholder: "Informe o seu telefone - (00) 00000-0000"
  });

  $('#cpf').mask('000.000.000-00', {
    placeholder: "Informe o seu CPF - 000.000.000-00"
  });

  $('#cep').mask('00000-000', {
    placeholder: "Informe o seu CEP - 00000-00"
  });

})