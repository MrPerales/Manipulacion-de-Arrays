const orders= [
    {
        customerNAme:'User1',
        total: 60,
        delivered: true,
    },
    {
        customerNAme:'User2',
        total: 40,
        delivered: true,
    },
    {
        customerNAme:'User3',
        total: 10,
        delivered: true,
    },
    {
        customerNAme:'User4',
        total: 260,
        delivered: true,
    },
    {
        customerNAme:'User5',
        total: 900,
        delivered: true,
    },

]
console.log('original', orders);
const  answer= orders.map(item=> item.total);
console.log('answer',answer);
// answer [ 60, 40, 10, 260, 900 ]

///////add another property 
//| bad
//v
// const answer2=orders.map(item=>{
//     item.taxes=0.20;
//     return item;
// });
// console.log('answer2',answer2);
// console.log('original', orders);


///add another property without change the original array

const answer3=orders.map(item=> {
    return{
            ...item,
            taxes:0.20
    }
}); 
console.log('answer3',answer3);
console.log('original', orders);



