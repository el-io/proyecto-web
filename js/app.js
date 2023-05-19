// Obtener el formulario y los campos
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Función de validación
function validateForm(event) {
  event.preventDefault(); // Prevenir envío del formulario
  
  // Limpiar mensajes de error
  const errorElements = document.getElementsByClassName('error');
  for (let i = 0; i < errorElements.length; i++) {
    errorElements[i].textContent = '';
  }
  
  // Validar nombre
  if (nameInput.value.trim() === '') {
    document.getElementById('name-error').textContent = 'Ingrese su nombre';
    nameInput.focus();
    return false;
  }
  
  // Validar email
  if (emailInput.value.trim() === '') {
    document.getElementById('email-error').textContent = 'Ingrese su email';
    emailInput.focus();
    return false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    document.getElementById('email-error').textContent = 'Ingrese un email válido';
    emailInput.focus();
    return false;
  }
  
  // Validar mensaje
  if (messageInput.value.trim() === '') {
    document.getElementById('message-error').textContent = 'Ingrese un mensaje';
    messageInput.focus();
    return false;
  }
  
  // Enviar formulario si todo es válido
  alert('¡Formulario enviado con éxito!');
  form.reset();
}

// Función para validar el formato del email
function isValidEmail(email) {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return emailRegex.test(email);
}

// Asociar la función de validación al evento submit del formulario
form.addEventListener('submit', validateForm);