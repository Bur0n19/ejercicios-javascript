const form = document.getElementById("formCalificaciones");
const resultado = document.getElementById("Resultado")

// Constantes aritemeticos para cada caso

const valorParciales = 0.55;
const valorExamen = 0.30;
const valorTrabajo = 0.15;

// función para validar los datos ingresados
function validador(valor, campo) {
    if (valor < 0 || valor> 10 || isNaN(valor)) {
        resultado.innerHTML = `Ingresa una calificación válida en ${campo}`;
        return false
    }
    return true
}
// función para obtener datos académicos

form.addEventListener("submit", function(event)
{
    event.preventDefault();
// Datos de parciales
    const parcialUno = parseFloat(document.getElementById("parcialUno").value)
    if(!validador(parcialUno, "el parcial Uno."));
    const parcialDos = parseFloat(document.getElementById("parcialDos").value)
     if(!validador(parcialDos, "el parcial Dos."));
    const parcialTres = parseFloat(document.getElementById("parcialTres").value)
     if(!validador(parcialTres, "el parcial Tres."));

     const totalParciales = valorParciales*(parcialUno+parcialDos+parcialTres)/3
    
// Datos del exámen
    const  examen = parseFloat(document.getElementById("examen").value)
     if(!validador(examen, "la calificación del exámen."));

     const totalExamen = examen*valorExamen;

// Datos del Trabajo
    const trabajo = parseFloat(document.getElementById("trabajo").value)
     if(!validador(trabajo, "el trabajo final."));

     const totalTrabajo = trabajo*valorTrabajo;

    //  Suma de promedios
    const totalFinal = totalParciales+totalExamen+totalTrabajo;
    return resultado.textContent = (`Tu promedio final es de ${totalFinal.toFixed(2)}`)
})