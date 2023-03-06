// Tu reto es retornar un array solo con las palabras
// que cumplan con la condición de tener un término de
// búsqueda dado.


function filterByTerm(array,term){
    return array.filter(item=> item.includes(term));
}


// //example
// Input:
array: ["ana", "santi", "nico", "anastasia"]
term: "ana"

// Ouput:
// ["ana", "anastasia"]