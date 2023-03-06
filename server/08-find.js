//find return all OBJECT
//.findIndex return only Index (position inside the array);
const numbers=[1,2,3,3,44,5,131,8,13,1,81,351,380,351];


const answer= numbers.find(item=>item===2) 
console.log(answer);
//
////example
const products = [
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];
  const isTherePizza= products.find(obj=>obj.id==='🍕');
  console.log(isTherePizza);
//   { name: 'Pizza', price: 12, id: '🍕' }

  const pizzaIndex=products.findIndex(obj=>obj.id==='🍕');
  console.log(pizzaIndex);
//   2