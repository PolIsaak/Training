import { division } from "./basicMath.js";

export function square(a) {
    return a ** 2;
}

export function cube(a) {
    return a ** 3;
}

export function squareRoot(a) {
    return a * a;
}

export function power(a, b = 2) {
    return a ** b;
}

export function porcentaje(a, b) {
    return a * b / 100;
}

export function redondeo(a) {
    let entero = Math.trunc(a);
    let decimal = a - entero;
    
    if (decimal == 0.50) {
        return a;
    } else {
        if (decimal < 0.50) {
            return entero;
        }
        if (decimal > 0.50) {
            return entero + 1;
        }
    }
}

export function modulo(a, b){
    let resultado_division = division(a, b);
    return a - Math.trunc(resultado_division) * b;
}