const form = document.getElementById("formHoras");
const resultado = document.getElementById("Resultado");

function validador(valor, campo) {
    if (valor < 0 || isNaN(valor)) {
        resultado.innerHTML = `Ingresa un dato correcto en ${campo}`;
        return false;
    }
    return true;
}

function calculadora(salario, horas, pagoHora) {
    if(salario<= 0)
    {
        resultado.textContent = "Ingresa un sueldo porfavor."
        return;
    }
    if (horas=== 0) {
        resultado.textContent = "No trabajas y todavía quieres saber cuánto cobras.";
        return;
    }
    if ( horas> 0 && horas <= 40) {
        return { 
            total: salario, 
            mensaje: `No habrá pago por horas extra. Tu sueldo es de $${salario}` 
        };
    } else {
        const diferenciaHoras = horas - 40;
        
        if (diferenciaHoras <= 8) {
            const pagoDoble = diferenciaHoras * pagoHora * 2;
            const total = salario + pagoDoble;
            return { 
                total: total, 
                mensaje: `Con ${diferenciaHoras} horas extras dobles. Pago total: $${total}` 
            };
        } else {
            const horasTriple = diferenciaHoras - 8;
            const pagoTriple = horasTriple * pagoHora * 3;
            const pagoDoble = 8 * pagoHora * 2; 
            const total = salario + pagoDoble + pagoTriple;
            return { 
                total: total, 
                mensaje: `Con 8 horas dobles y ${horasTriple} horas triples. Pago total: $${total}` 
            };
        }
    }
}

form.addEventListener("submit", function(event){
    event.preventDefault();

    const salario = parseFloat(document.getElementById("salario").value);
    if(!validador(salario, "salario")) return;

    const horas = parseInt(document.getElementById("horas").value);
    if(!validador(horas,"horas")) return;

   

    const pagoHora = salario / 40;
    const pagoTotal = calculadora(salario, horas, pagoHora);

    // 👇 usa el mensaje detallado
    resultado.textContent = pagoTotal.mensaje;
});
