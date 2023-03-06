const words = ['The', 'OnePiece', 'is', 'real'];

//.filter() works with a condition
const filter = words.filter(item => item.length >= 4);
console.log('original', words);
console.log('.filter()', filter);

/// others example

const orders = [
    {
        customerName: 'User1',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Carlos',
        total: 40,
        delivered: false,
    },
    {
        customerName: 'User3',
        total: 10,
        delivered: true,
    },
    {
        customerName: 'User4',
        total: 260,
        delivered: false,
    },
    {
        customerName: 'User5',
        total: 900,
        delivered: true,
    },

]
console.log(orders);
const answer = orders.filter(item => item.delivered);
console.log(answer);



const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    });
}

console.log(search('Ca'));
// [ { customerName: 'Carlos', total: 40, delivered: false } ]