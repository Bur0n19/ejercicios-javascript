const form = document.getElementById("formDescuento");
const resultado = document.getElementById("Resultado");

const descuento = 0.15;


form.addEventListener("submit", function(event)
{
    event.preventDefault();

    const precio = parseFloat(document.getElementById("precio").value);

    if(precio <=0 || isNaN(precio))
    {
        resultado.textContent = "Ingrese una cantidad real por favor";
       return;
    }

    const descuentoTotal = precio * descuento;
    const total = precio - descuentoTotal;
    return resultado.textContent = (`Su descuento será de ${descuentoTotal} y el total es de $${total.toFixed(2)}.`);
});
