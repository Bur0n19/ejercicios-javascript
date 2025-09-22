const form = document.getElementById("formCumple");
const resultado = document.getElementById("Resultado");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const fechaNacimiento = new Date(document.getElementById("cumple").value);
  if (isNaN(fechaNacimiento)) {
    resultado.textContent = "Por favor, ingresa una fecha válida.";
    return;
  }

  const hoy = new Date();
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  const mes = hoy.getMonth() - fechaNacimiento.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
    edad--;
  }

  resultado.textContent = `Tienes ${edad} años.`;
});