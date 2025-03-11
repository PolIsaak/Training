import { inProduct } from './src/modules/in.js'
import { applyDiscount } from './src/modules/discounts.js';

/**
 * @function inProduct retorna la información del objeto product cuando se termina de ejecutar y almacenamos
 * lo que nos retorna en la variable producto.
 */
const producto = inProduct();


let orderPrice = {
    subtotal: 0,
    total: 0,
};

switch (producto.type) {
    case "Pastel":
        if (producto.distinguished || producto.quantity >= 4) {
            orderPrice = applyDiscount(150, producto.quantity, 0.15, producto.distinguished);
            alert("Información de la Orden \nProducto:" + producto.type + "\nPiezas: " + producto.quantity + "\nSubtotal: " + orderPrice.subtotal + "\nTotal: " + orderPrice.total);
            break;
        }
        orderPrice = applyDiscount(150, producto.quantity, 0);
        alert("Información de la Orden \nProducto:" + producto.type + "\nPiezas: " + producto.quantity + "\nSubtotal: " + orderPrice.subtotal + "\nTotal: " + orderPrice.total);
        break;
    case "Pay":
        if (producto.distinguished || producto.quantity >= 3) {
            orderPrice = applyDiscount(180, producto.quantity, 0.15, producto.distinguished);
            alert("Información de la Orden \nProducto:" + producto.type + "\nPiezas: " + producto.quantity + "\nSubtotal: " + orderPrice.subtotal + "\nTotal: " + orderPrice.total);
            break;
        }
        orderPrice = applyDiscount(180, producto.quantity, 0);
        alert("Información de la Orden \nProducto:" + producto.type + "\nPiezas: " + producto.quantity + "\nSubtotal: " + orderPrice.subtotal + "\nTotal: " + orderPrice.total);
        break;
    case "Cupcake":
        if (producto.distinguished || producto.quantity >= 6) {
            orderPrice = applyDiscount(45, producto.quantity,0.15, producto.distinguished);
            alert("Información de la Orden \nProducto:" + producto.type + "\nPiezas: " + producto.quantity + "\nSubtotal: " + orderPrice.subtotal + "\nTotal: " + orderPrice.total);
            break;
        }
        orderPrice = applyDiscount(45, producto.quantity, 0);
        alert("Información de la Orden \nProducto:" + producto.type + "\nPiezas: " + producto.quantity + "\nSubtotal: " + orderPrice.subtotal + "\nTotal: " + orderPrice.total);
        break;
    case "Cookiebox":
        if (producto.distinguished || producto.quantity >= 5) {
            orderPrice = applyDiscount(30, producto.quantity,0.15, producto.distinguished);
            alert("Información de la Orden \nProducto:" + producto.type + "\nPiezas: " + producto.quantity + "\nSubtotal: " + orderPrice.subtotal + "\nTotal: " + orderPrice.total);
            break;
        }
        orderPrice = applyDiscount(30, producto.quantity, 0);
        alert("Información de la Orden \nProducto:" + producto.type + "\nPiezas: " + producto.quantity + "\nSubtotal: " + orderPrice.subtotal + "\nTotal: " + orderPrice.total);
        break;
    default:
        alert("Ese producto no se encuentra disponible actualmente");
        break;
}