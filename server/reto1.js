// Tienes un array de objetos que representan datos de productos
//  con los siguientes atributos:

//     name
//     price
//     stock

// Tu reto es agregar y calcular una nueva propiedad llamada "taxes",
// los impuestos deben ser del 19% con base al precio base 
// y debes tener en cuenta que como resultado se debe dejar un valor entero,
// sin decimales


function addNewAttr(array){
    return array.map(item=>{
        return {
            ...item,
            taxes:Math.trunc(item.price*0.19),
        }
    })
}













// Input:
// [
//   {
//     name: "Product 1",
//     price: 1000,
//     stock: 10
//   },
//   {
//     name: "Product 2",
//     price: 2000,
//     stock: 20
//   }
// ]

// Output:
// [
//   {
//     name: "Product 1",
//     price: 1000,
//     stock: 10,
//     taxes: 190
//   },
//   {
//     name: "Product 2",
//     price: 2000,
//     stock: 20,
//     taxes: 380
//   }
// ]