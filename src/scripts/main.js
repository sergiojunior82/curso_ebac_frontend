document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('.product-button');

  buttons.forEach(function(button) {
      button.addEventListener('click', function() {
          alert('Ver Detalhes');
      });
  });
});