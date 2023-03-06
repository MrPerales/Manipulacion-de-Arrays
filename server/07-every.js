//.every = all elements have to comply the condition if not (false)
const numbers = [1, 2, 3, 5, 4, 5, 7, 85, 87, 52, 1518, 464, 541];


const answer = numbers.every(item => item <= 1800);
console.log(answer);

////
const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 2,
    },
    {
        name: "Santiago",
        age: 18,
    },
];

const isAdmitted= team.every(player=> player.age <=19);
console.log('isAdmitted', isAdmitted);
