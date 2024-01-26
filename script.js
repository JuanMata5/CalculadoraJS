const btnNumbers = document.querySelectorAll('.Btn:not(.BtnC, #BtnDel, #BtnPorcentaje, #BtnMultiplicacion, #BtnMenos, #BtnMas, #BtnIgual)');
const inputScreen = document.getElementById("inputScreen");
const BtnClear = document.getElementById("BtnClear");
const BtnDel = document.getElementById("BtnDel");
const BtnPorcentaje = document.getElementById("BtnPorcentaje");
const BtnMultiplicacion = document.getElementById("BtnMultiplicacion");
const BtnMenos = document.getElementById("BtnMenos");
const BtnMas = document.getElementById("BtnMas");
const BtnIgual = document.getElementById("BtnIgual");

// Variable para rastrear si se ha calculado un resultado
let hasResult = false;

// Agregar eventos de clic a los botones de números
btnNumbers.forEach(btn => {
    btn.addEventListener('click', function() {
        // Obtener el valor del número del botón clicado
        const numberValue = this.innerText;

        // Obtener el contenido actual del input
        let currentInput = inputScreen.value;

        // Verificar si ya hay un resultado en el input
        if (hasResult) {
            // Si hay un resultado, comenzar con el nuevo número
            inputScreen.value = numberValue;
            hasResult = false; // Restablecer el indicador de resultado
        } else {
            // Agregar el número al contenido actual
            currentInput += numberValue;

            // Actualizar el valor del input con el nuevo contenido
            inputScreen.value = currentInput;
        }
    });
});

BtnClear.addEventListener("click", function() {
    inputScreen.value = '';
    hasResult = false; // Restablecer el indicador de resultado
});

BtnDel.addEventListener('click', function() {
    let currentInput = inputScreen.value;

    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
    }

    inputScreen.value = currentInput;
    hasResult = false; // Restablecer el indicador de resultado
});

BtnMas.addEventListener('click', function() {
    let currentInput = inputScreen.value;

    if (currentInput.trim() !== '') {
        // Verificar si ya hay una operación de suma en el input
        // Si ya hay una suma, evaluar y actualizar el resultado
        // Si no hay una suma, simplemente agregar el símbolo de suma al input
        inputScreen.value = currentInput.includes('+') ? eval(currentInput) : currentInput + ' + ';
        hasResult = false; // Restablecer el indicador de resultado
    }
});

BtnMenos.addEventListener('click', function() {
    let currentInput = inputScreen.value;

    if (currentInput.trim() !== '') {
        // Verificar si ya hay una operación de suma en el input
        // Si ya hay una suma, evaluar y actualizar el resultado
        // Si no hay una suma, simplemente agregar el símbolo de suma al input
        inputScreen.value = currentInput.includes('-') ? eval(currentInput) : currentInput + ' - ';
        hasResult = false; // Restablecer el indicador de resultado
    }
});

BtnMultiplicacion.addEventListener('click', function() {
    let currentInput = inputScreen.value;

    if (currentInput.trim() !== '') {
        // Verificar si ya hay una operación de suma en el input
        // Si ya hay una suma, evaluar y actualizar el resultado
        // Si no hay una suma, simplemente agregar el símbolo de suma al input
        inputScreen.value = currentInput.includes('*') ? eval(currentInput) : currentInput + ' * ';
        hasResult = false; // Restablecer el indicador de resultado
    }
});

BtnPorcentaje.addEventListener('click', function() {
    let currentInput = inputScreen.value;

    if (currentInput.trim() !== '') {
        // Dividir el valor actual por 100 para obtener el porcentaje
        inputScreen.value = eval(currentInput + '/100');
        hasResult = true; // Establecer el indicador de resultado
    }
});

BtnIgual.addEventListener('click', function() {
    let currentInput = inputScreen.value;

    if (currentInput.trim() !== '') {
        // Agregar el signo "=" al final del resultado
        inputScreen.value = eval(currentInput);
        hasResult = true; // Establecer el indicador de resultado
    }
});