const totals =[1,2,3,4,5];

const answer= totals.reduce((sum,item)=>sum+item ,0);

console.log(answer);

/////////////
//REDUCE RELOADED

const items=[1,2,3,4,,4,3];
const answer2 = items.reduce((obj,item)=>{
    if(obj[item]){
        obj[item]++;
    }else{
        obj[item]=1;
    }
    return obj;
},{})

console.log(answer2);
// { 
//     '1': 1,
//     '2': 1,
//     '3': 2,
//     '4': 2
//  }

///////other example 
const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

const answerExample=data.map(item=> item.level).reduce((obj,item)=>{
    if(obj[item]){
        obj[item]++;
    }else{
        obj[item]=1;
    }
    return obj;
},{});
console.log(answerExample);

/// challenge
const data1=[1,1,2,5,6,4,9,10,11,12,15,2,6,5];

const answerChallenge=data1.reduce((obj,item)=>{
    if(item>0 && item<=5){
        obj['0-5']=obj['0-5']+1;
    }else if(item>6 && item<=9){
        obj['6-9']=obj['6-9']+1;
    }else if(item>=10){
        obj['10-inf']=obj['10-inf']+1;
    }
    return obj;
},{'0-5':0,'6-9':0,'10-inf':0});

console.log(answerChallenge);
