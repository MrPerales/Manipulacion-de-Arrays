///MUTABLE
const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productIndex=products.findIndex(item=>item.id==='🍔');
console.log(productIndex);

if(productIndex !==-1){
    //add content in myProducts
    myProducts.push(products[productIndex]);
    //delete the content
    //      .splice(positionIndex, elements to delate after positionIndex);
    products.splice(productIndex,1); 
}
console.log(myProducts);
console.log("products", products);



///updates
const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];
console.log('productsV2',productsV2);
const update={
    id:'🥞' ,
    changes:{
        price:200,
        description:'delicious',
    }
}
console.log('update',update);
const productIndexV2= productsV2.findIndex(item=>item.id===update.id);
console.log(productIndexV2);

productsV2[productIndexV2]={
    ...productsV2[productIndexV2],
    ...update.changes,

}
console.log('productsV2[productIndexV2]',productsV2[productIndexV2]);
console.log('productsV2',productsV2);


//challenge update without modify original array

const newProductsUpdate=productsV2.map(item=>{
    if(item.id==update.id){
        return {
            ...item,
            ...update.changes
        }
    }
    return item
});

console.log('-------------',newProductsUpdate);