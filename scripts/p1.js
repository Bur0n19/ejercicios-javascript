const form = document.getElementById("formInversion")
const resultado = document.getElementById("Resultado")

const tasa = 0.02;

form.addEventListener("submit", function(event)
{
    event.preventDefault();

    const capital = parseFloat(document.getElementById("capital").value);

    if(capital <=0 || isNaN(capital))
    {
       return  resultado.textContent = "Ingrese una cantidad real porfavor";
    }

    const ganancia = capital * tasa;
    const total = capital + ganancia;
    return resultado.textContent = (`Su ganancia sera de ${ganancia} y el total es de $${total.toFixed(2)}.`);
});
