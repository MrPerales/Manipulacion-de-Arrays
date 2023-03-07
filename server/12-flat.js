const matriz =[
    [[1,2],3,4,5],
    [6,7,8,[9,10]],
    [11,12,[13,14,[15]]],
]
const answerFlat=matriz.flat(5);
console.log(answerFlat);


//flat without flat 
function flatArray(array){
    let newFlatArray=[];
    for(item of array){
        if(!Array.isArray(item)){
            newFlatArray.push(item);
        }else{
            newFlatArray=newFlatArray.concat(flatArray(item));
        }
    }
    return newFlatArray;
}
// flatArray(matriz);
console.log('function',flatArray(matriz));