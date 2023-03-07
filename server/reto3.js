// En este desafío tienes array de strings y cada línea es un fragmento,
// el Zen de Python, tu reto es hacer un método que retorne el número de
// palabras totales que tiene el array.

const array=[
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
]

function countWords(array){
    //we used split para separar las palabras  [ 'Beautiful', 'is', 'better', 'than', 'ugly' ] with dimension de 5,....
    //then we use .length to do a numeric array 
    const arrayArrays=array.map(item=>item.split(' ').length);
    console.log('arrayArrays= ',arrayArrays);// arrayArrays=  [ 5, 5, 5, 5 ]
    const count= arrayArrays.reduce((sum,item)=>sum+=item,0);
    console.log('count= ',count); //count=  20
    return count;
}

console.log(countWords(array))


//////////////////other option 
function countWords2(array) {
    // Tu código aquí 👈 
   return lines.join(" ").split(" ").length
}; 
console.log(countWords2(array))


// Input: [
//     "Beautiful is better than ugly",
//     "Explicit is better than implicit",
//     "Simple is better than complex",
//     "Complex is better than complicated",
//   ]
  
//   Output: 20