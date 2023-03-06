//.some only return a boolean (true or false)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const answer = numbers.some(item => item % 2 === 0)
console.log(answer);

///
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

const answerOrders = orders.some(item => item.delivered);
console.log(answerOrders);


////example 
const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "work appointment",
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "appointment with my boss",
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "Dinner",
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
};

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlap= (newDate)=>{
    return dates.some(date=>{
        return areIntervalsOverlapping(
            {star:date.startDate , end: date.endDate},
            {star:newDate.startDate, end:newDate.endDate},
            );
    })    
}
console.log('isOverlap', isOverlap(newAppointment));