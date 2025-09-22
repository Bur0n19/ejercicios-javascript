 document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('registroForm');
            const alertBox = document.getElementById('alertBox');
            const contadorCaracteres = document.getElementById('contadorCaracteres');

            const campos = {
                nombre: document.getElementById('nombre'),
                email: document.getElementById('email'),
                password: document.getElementById('password'),
                comentarios: document.getElementById('comentarios'),
                condiciones: document.getElementById('condiciones')
            };

            const errores = {
                nombre: document.getElementById('errorNombre'),
                email: document.getElementById('errorEmail'),
                password: document.getElementById('errorPassword'),
                comentarios: document.getElementById('errorComentarios'),
                condiciones: document.getElementById('errorCondiciones')
            };

            campos.comentarios.addEventListener('input', function() {
                const longitud = this.value.length;
                contadorCaracteres.textContent = longitud;
                
                if (longitud > 50) {
                    this.value = this.value.substring(0, 50);
                    contadorCaracteres.textContent = 50;
                }
            });

            Object.keys(campos).forEach(campo => {
                if (campo !== 'condiciones') {
                    campos[campo].addEventListener('blur', function() {
                        validarCampo(campo);
                    });
                }
            });


            function validarCampo(campo) {
                let esValido = true;
                let mensaje = '';

                switch(campo) {
                    case 'nombre':
                        if (!campos.nombre.value.trim()) {
                            esValido = false;
                            mensaje = 'El nombre es obligatorio';
                        }
                        break;

                    case 'email':
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (!campos.email.value.trim()) {
                            esValido = false;
                            mensaje = 'El email es obligatorio';
                        } else if (!emailRegex.test(campos.email.value)) {
                            esValido = false;
                            mensaje = 'Ingresa un email válido';
                        }
                        break;

                    case 'password':
                        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
                        if (!campos.password.value) {
                            esValido = false;
                            mensaje = 'La contraseña es obligatoria';
                        } else if (!passwordRegex.test(campos.password.value)) {
                            esValido = false;
                            mensaje = 'La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula y un número';
                        }
                        break;

                    case 'comentarios':
                        if (!campos.comentarios.value.trim()) {
                            esValido = false;
                            mensaje = 'Los comentarios son obligatorios';
                        } else if (campos.comentarios.value.length > 50) {
                            esValido = false;
                            mensaje = 'Los comentarios no deben exceder 50 caracteres';
                        }
                        break;
                }

   
                if (!esValido) {
                    campos[campo].classList.add('error');
                    errores[campo].style.display = 'block';
                    errores[campo].textContent = mensaje;
                    

                    mostrarAlerta(mensaje);
                } else {
                    campos[campo].classList.remove('error');
                    errores[campo].style.display = 'none';
                }

                return esValido;
            }

    
            function validarCondiciones() {
                if (!campos.condiciones.checked) {
                    errores.condiciones.style.display = 'block';
                    mostrarAlerta('Debes aceptar las condiciones del servicio');
                    return false;
                } else {
                    errores.condiciones.style.display = 'none';
                    return true;
                }
            }

          
            function mostrarAlerta(mensaje) {
                alertBox.textContent = mensaje;
                alertBox.style.display = 'block';
                
                setTimeout(() => {
                    alertBox.style.display = 'none';
                }, 3000);
            }

            form.addEventListener('submit', function(event) {
                event.preventDefault();
                
                let formularioValido = true;
                
        
                Object.keys(campos).forEach(campo => {
                    if (campo === 'condiciones') {
                        if (!validarCondiciones()) {
                            formularioValido = false;
                        }
                    } else {
                        if (!validarCampo(campo)) {
                            formularioValido = false;
                        }
                    }
                });

                if (formularioValido) {
                  
                    alert('¡Formulario enviado con éxito!');
                    form.submit();
                } else {
                    mostrarAlerta('Por favor, corrige los errores en el formulario');
                }
            });
        });