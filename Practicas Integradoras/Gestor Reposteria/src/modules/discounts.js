export const applyDiscount = function(unitPrice, quantity, discount = 0.15, distinguished_customer){

    // Este objeto nos servirá para mostrarle al usuario su ticket desglozado
    let totals = {
        subtotal: 0,
        total: 0
    }

    // usamos el objeto arguments para aumentar el descuento a clientes distinguidos
    if (distinguished_customer == true) {
        arguments[2] = 0.20;
    }

    totals.subtotal = quantity * unitPrice; // aquí obtenemos el subtotal de la orden
    totals.total = totals.subtotal - (totals.subtotal * arguments[2]); // restamos el porcentaje de descuento

    return totals;
}