//ENVIAR EMAIL A EMAILJS
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_a5ey61k';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('¡Gracias por contactarte con nosotros!\nPronto nos comunicaremos con vos.');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});

//VALIDACION DEL FORMULARIO
/*
function validarFormulario() {
  var nombre = document.getElementById("nombre").value;
  var provincia = document.getElementById("provincia").value;
  var carrera = document.getElementById("carrera").value;
  var telefono = document.getElementById("telefono").value;
  var email = document.getElementById("email").value;

  // Validar que los campos no estén vacíos
  if (nombre === "" || provincia === "" || carrera === "" || telefono === "" || email === "") {
    alert("Por favor, complete todos los campos requeridos.");
    return false; // Detener el envío del formulario
  }

  // Validar el formato del correo electrónico (puedes usar una expresión regular)
  var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  if (!email.match(emailRegex)) {
    alert("Por favor, ingrese una dirección de correo electrónico válida.");
    return false;
  }

  // Validar otros campos según tus requerimientos
  // Por ejemplo, puedes validar el formato del número de teléfono

  // Si todo está validado, el formulario se enviará
  return true;
}
*/

