document.getElementById('form-contacto').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Gracias por tu mensaje, ' + this.nombre.value + '!');
  this.reset();
});