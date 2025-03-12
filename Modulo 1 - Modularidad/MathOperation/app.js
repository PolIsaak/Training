import { sum, resta, multiplicacion, division } from './utils/basicMath.js';
import { square, cube, squareRoot, power, porcentaje, redondeo, modulo } from './utils/advancedMath.js';

console.log("Suma: ", sum(10, 3));
console.log("Resta: ",resta(10, 3));
console.log("Multiplicación: ",multiplicacion(10, 3));
console.log("Division: ",division(10, 3));
console.log("Cuadrado: ", square(10));
console.log("Cubo: ", cube(10));
console.log("Raiz Cuadrada", squareRoot(10));
console.log("Potencia: ", power(4, 0));
console.log("Porcentaje: ", porcentaje(100, 30));
console.log("Redondeo: ", redondeo(4.56));
console.log("Redondeo: ", redondeo(4.50));
console.log("Redondeo: ", redondeo(4.34));
console.log("Modulo: ", modulo(9, 3));