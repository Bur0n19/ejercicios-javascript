const form = document.getElementById("formComision");
const resultado = document.getElementById("Resultado");

const comision = 0.10;

function validador(valor, campo) {
    if (valor < 0 || isNaN(valor)) {
        resultado.innerHTML = `Ingresa un valor numérico real en ${campo}`;
        return false;
    }
    return true;
}

form.addEventListener("submit", function(event)
{
    event.preventDefault();

    const sueldo = parseFloat(document.getElementById("sueldo").value)
    if (!validador(sueldo, "sueldo")) return;
    // Variables para comisiones
    const venta1 = parseFloat(document.getElementById("venta1").value);
    if (!validador(venta1, "venta 1")) return;
    const venta2 = parseFloat(document.getElementById("venta2").value);
    if (!validador(venta2, "venta 2")) return;
    const venta3 = parseFloat(document.getElementById("venta3").value);
    if (!validador(venta3, "venta 3")) return;

    // Calculo del 10% de comisión por venta

    const comision1 = venta1*comision;
    const comision2 = venta2*comision;
    const comision3 = venta3*comision;
    const totalComision = comision1+comision2+comision3;
    const total = sueldo +totalComision;

    return resultado.textContent = (`El total de las comisiones es de $${totalComision.toFixed(2)}\n y obtendrás un total de ${total.toFixed(2)}  `)

});