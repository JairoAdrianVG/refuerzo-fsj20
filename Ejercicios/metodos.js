//Map => Retornar un nuevo arreglo dejando el original tal cual

const numeros = [12,124,321,4];

//Dado un array multiplicar sus valores por 2 y retorar un nuevo array con esos valores

const nuevoArray = numeros.map( (valor) => {
    return valor * 2
})

console.log(nuevoArray);

// Foreach
let arrayNuevito = [];

numeros.forEach((valor) =>{
    arrayNuevito.push(valor *2); 
})

console.log(arrayNuevito);

//For
let arrayMasNuevito = [];

for(let i = 0; i<numeros.length;i++){
    arrayMasNuevito.push(numeros[i] * 2);
}

console.log(arrayMasNuevito);


