const form = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const apellidos = document.querySelector("#apellidos");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const edad = document.querySelector("#edad");
const condiciones = document.querySelector("#condiciones");
const mensajes = document.querySelector("#mensajes");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let mensaje = "";
  mensajes.innerHTML = "";
  mensajes.classList.remove("err");
  mensajes.classList.remove("ok");

  // VALIDACIONES
  if (!correctText(nombre.value.trim())) {
    mensaje += "El nombre no es correcto<br>";
  }
  if (!correctText(apellidos.value.trim())) {
    mensaje += "El apellido no es correcto<br>";
  }
  if (!correctEmail(email.value.trim())) {
    mensaje += "El email no es correcto<br>";
  }
  if (!correctPassword(password.value.trim(), password2.value.trim())) {
    mensaje += "La contraseña debe contener al menos 6 caracteres<br>";
  } else if (!passwordsEquals(password.value.trim(), password2.value.trim())) {
    mensaje += "Las contraseñas no coinciden<br>";
  }
  if (!correctAge(edad.value)) {
    mensaje += "La edad no es correcta<br>";
  }
  if (!termsAccepted(condiciones)) {
    mensaje += "No es posible continuar sin aceptar las condiciones<br>";
  }

  if (mensaje) {
    mensajes.innerHTML = mensaje;
    mensajes.classList.add("err");
  } else {
    mensajes.textContent = "Formulario válido";
    mensajes.classList.add("ok");
    form.submit();
  }
});

function correctText(text) {
  return text.length > 2;
}

function correctEmail(text) {
  return text.includes("@") && text.lastIndexOf(".") > text.indexOf("@");
}

function correctPassword(p1, p2) {
  return p1.length > 5 && p2.length > 5;
}

function passwordsEquals(p1, p2) {
  return p1 === p2;
}

function correctAge(age) {
  const edadNum = Number(age);
  return edadNum > 0 && edadNum < 121;
}

function termsAccepted(checkbox) {
  return checkbox.checked;
}
