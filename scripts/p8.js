const form = document.getElementById("formUtilidades");
        const resultado = document.getElementById("resultado");

        function validador(valor, campo) {
            if (valor < 0 || isNaN(valor)) {
                resultado.innerHTML = `<span class="error">Ingresa un dato válido en ${campo}</span>`;
                resultado.className = 'error';
                return false;
            }
            return true;
        }

        function calcularPorcentajeUtilidad(antiguedad) {
            if (antiguedad < 1) {
                return 5;
            } else if (antiguedad >= 1 && antiguedad < 2) {
                return 7;
            } else if (antiguedad >= 2 && antiguedad < 5) {
                return 10;
            } else if (antiguedad >= 5 && antiguedad < 10) {
                return 15;
            } else {
                return 20;
            }
        }

        function calcularUtilidad(salario, antiguedad) {
            const porcentaje = calcularPorcentajeUtilidad(antiguedad);
            const utilidad = (salario * porcentaje) / 100;
            
            return {
                porcentaje: porcentaje,
                utilidad: utilidad,
                mensaje: `Con ${antiguedad} años de antigüedad:<br>
                         - Porcentaje de utilidad: ${porcentaje}%<br>
                         - Utilidad anual: $${utilidad.toFixed(2)}<br>
                         - Salario mensual: $${salario.toFixed(2)}<br>
                         - <strong>Total a recibir: $${utilidad.toFixed(2)}</strong>`
            };
        }

        form.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const salario = parseFloat(document.getElementById("salario").value);
            if (!validador(salario, "salario")) return;

            const antiguedad = parseFloat(document.getElementById("antiguedad").value);
            if (!validador(antiguedad, "antigüedad")) return;

            const resultadoCalculo = calcularUtilidad(salario, antiguedad);
            
            resultado.innerHTML = resultadoCalculo.mensaje;
            resultado.className = '';
        });