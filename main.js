$(document).ready(function() {

  $('form').on('submit', function(e) {
    e.preventDefault();

    const novaTarefa = $('#nova-tarefa').val();
    const tarefas = $('<li></li>');

    $(`<a href="#"><p id="link-tarefa">${novaTarefa}</p></a>`).appendTo(tarefas);
    $(tarefas).appendTo('ul');
    $('#nova-tarefa').val('');

  })

  $('ul').on('click', '#link-tarefa', function() {
    $(this).toggleClass('concluida');
  })

})