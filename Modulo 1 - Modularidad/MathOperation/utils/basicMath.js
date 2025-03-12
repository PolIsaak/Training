export function sum(a, b){
	return a + b;
}

export function resta(a,b){
    return a - b;
}

export function multiplicacion(a,b){
    return a * b;
}

export function division(a, b){
    if (b === 0) {
        throw new Error("No puedes dividir por 0");
    }
    const res = a / b;    
    return res;
}