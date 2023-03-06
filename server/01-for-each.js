const letters=['a','b','c'];


letters.forEach((item)=>console.log('foreach',item));

const array =[1,2,3,4,-2];
function multiplyElements(array){
   const multi= array.map(item=> item*2);
   console.log(multi);
}
multiplyElements(array);