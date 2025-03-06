// Función declarada
export function kgToLibras(a){
    return a * 2.204;    
}

// Función Anonima
export const kmToMillas = function(a){
    return a * 0.621;
}

/**
 * @function celsiusToFarenheit Esta función sirve para convertir grados celsius a grados farenheit
 * @param {number} a Grados Celsius a convertir a farenheit
 * @returns { Farenheith }
*/
export const celsiusToFarenheit = (a) => { return a * 1.8 + 32} 

// Función que ejecuta la conversión con la función correspondiente
export function convertir(valor, funcionConversion) {
    return funcionConversion(valor);
}