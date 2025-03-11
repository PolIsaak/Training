// funcion vacia
export function inProduct(){
    // inicialización de objeto
    let product = {
        type: "",
        quantity: 0,
        distinguished: false,
    }

    // accediendo al objeto y declarandole un valor
    product.type = prompt("Tipo de producto a comprar: ");

    // obtenemos el valor del prompt y lo convertimos a string
    product.quantity = parseInt(prompt("Cantidad: "));
    /*
    const quantity = prompt("Cantidad: ");
    product.quantity = parseInt(quantity);
    */    

    // con el operador ternario estamos convirtiendo un string a un boleano
    product.distinguished = prompt("Es cliente distinguido? ") === "yes" ? true : false;

    // la información necesaria para trabajar los siguientes pasos
    return product;
}