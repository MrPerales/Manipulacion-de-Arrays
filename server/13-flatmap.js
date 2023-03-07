//flatMap only works to 1 level 
const users=[
    {userId:1,username:'Tom',attributes:['nice','cute']},
    {userId:2,username:'Mike',attributes:['lovely']},
    {userId:3,username:'NIco',attributes:['nice','coll']},
];

const answer= users.map(item=>item.attributes).flat();
console.log('map and flat',answer);

const answerFlatMap= users.flatMap(item=> item.attributes);
console.log('answerFlatMap',answerFlatMap);

//example challenge

const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "appointment 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "appointment 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "appointment 3",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "appointment 4",
      },
    ],
  };
  const arrayCalendars=Object.values(calendars);
  console.log('arrayCalendars',arrayCalendars);

  const startDates=arrayCalendars.flat().map(item =>item.startDate);
  console.log('startDates',startDates);
