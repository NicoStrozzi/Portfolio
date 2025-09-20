document.addEventListener('DOMContentLoaded',iniciarFormulario);
function iniciarFormulario(){
  const formulario=document.getElementById('form-contacto');
  formulario.addEventListener('submit',manejarEnvio);
}
function manejarEnvio(evento){
  evento.preventDefault();
  const nombreIngresado=document.getElementById('form-contacto').nombre.value;
  alert('Gracias por tu mensaje, '+nombreIngresado+'!');
  document.getElementById('form-contacto').reset();
}



