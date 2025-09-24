     const palabras = [];

        const diccionario = {
            "cero": 0, "uno": 1, "dos": 2, "tres": 3, "cuatro": 4, "cinco": 5, "seis": 6, "siete": 7, "ocho": 8, "nueve": 9     
        };

         document.addEventListener("keydown", function(event){
            if(event.key === "Enter"){
                event.preventDefault();
                palabrasANumeros();
            }
        })

        function palabrasANumeros(arr) {
            return arr.map(palabra => diccionario[palabra.toLowerCase()] ?? -1);
        }
       

        const input = document.getElementById("palabra");
        const spanOriginal = document.getElementById("original");
        const spanTraducida = document.getElementById("traducida");
        const addNumber = document.getElementById("btnAgregar");
        const traducir = document.getElementById("btnTraducir");
        const limpiar = document.getElementById("btnLimpiar");

        addNumber.addEventListener("click", function() {
            
            const valor = input.value.trim().toLowerCase();
            if (valor !== "") {
                palabras.push(valor);
                spanOriginal.textContent = `[ ${palabras.join(", ")} ]`;
                input.value = "";
                spanTraducida.textContent = "";
            }
        });

        traducir.addEventListener("click", function() {
            const traducida = palabrasANumeros(palabras);
            spanTraducida.textContent = `[ ${traducida.join(", ")} ]`;
        });

        limpiar.addEventListener("click", function() {
            palabras.length = 0;
            spanOriginal.textContent = "";
            spanTraducida.textContent = "";
            input.value = "";
        });