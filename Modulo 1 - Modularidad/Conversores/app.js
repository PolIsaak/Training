// INICIO
import { kgToLibras, kmToMillas, celsiusToFarenheit, convertir } from "./modules/conversor.js";

// PREGUNTA AL USUARIO
setTimeout(() => {
    const tipoConversion = prompt(
        "Selecciona un tipo de conversión:\n1 - KG a Libras\n2 - KM a Millas\n3 - Celsius a Farenheit"
    );

    switch (tipoConversion) {
        case "1":
            const kg = prompt("Ingresa los Kilogramos: ");
            alert("El resultado de KG a Libras es: " + convertir(kg, kgToLibras));
            break;
        case "2":
            const km = prompt("Ingresa los Kilómetros: ");
            alert("El resultado de KM a Millas es: " + convertir(km, kmToMillas));
            break;
        case "3":
            const c = prompt("Ingresa los Celsius: ");
            alert("El resultado de Celsius a Farenheit es: " + convertir(c, celsiusToFarenheit));
            break;
        default:
            alert("Opción no válida. Por favor, selecciona 1, 2 o 3.");
            break;
    }
}, 1000);
