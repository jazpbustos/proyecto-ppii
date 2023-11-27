//FORMULARIO

// Agrega un controlador de eventos al formulario
document.getElementById('form').addEventListener('submit', function(event) {
  // Evita el comportamiento predeterminado de envío del formulario
  event.preventDefault();

//Constantes
  const nombreInput = document.getElementById('nombre');
  const provinciaInput = document.getElementById('provincia');
  const carreraInput = document.getElementById('carrera');
  const telefonoInput = document.getElementById('telefono');
  const emailInput = document.getElementById('email');

  // Validar que no haya campos con espacios en blancos o vacíos
  if (
    nombreInput.value.trim() === "" ||
    provinciaInput.value.trim() === "" ||
    carreraInput.value.trim() === "" ||
    telefonoInput.value.trim() === "" ||
    emailInput.value.trim() === ""
  ) {
    alert("Por favor, complete todos los campos requeridos.");
    return; // Detener la ejecución del resto del código
  }

  // Validar email
  if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity("Introduzca una dirección de correo electrónico válida");
    return; // Detener la ejecución del resto del código
  } else {
    emailInput.setCustomValidity("");
  }

  // Código de EmailJs para enviar formulario
  const btn = document.getElementById('button');
  btn.value = 'Enviando...';

  const serviceID = 'default_service';
  const templateID = 'template_a5ey61k';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('¡Gracias por contactarte con nosotros!\nPronto nos comunicaremos contigo.');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});

//CARDS CARRUSEL
var cardsSlider = new Swiper('.cards-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});