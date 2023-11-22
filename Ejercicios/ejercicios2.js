// Operador Ternario
// IF (CONDICION) {CASO TRUE, QUE SE CUMPLA}
// ELSE { CASO FALSE O QUE NO SE CUMPLA}

// ESTO ES ASI? HACE ESTO : SI NO ES ASI, HACE ESTO.
// CONDICION ? CASO TRUE : CASO FALSE;

let edad = 18;
/*
if(edad >16) {
    console.log("Sos mayor de 16");
} else{
    console.log("No sos mayor de 16");
} 
*/
edad > 16 ? console.log("Sos mayor de 16"): console.log("No sos mayor de 16");

//Ejemplo 2
/*function activarModoSSJ(){
 let condicion = false;

 let ModoSSJ = condicion ? false :true;
 console.log(ModoSSJ);
}

activarModoSSJ();*/

//8- Crea una función que tome un array de números y un valor límite,
//y devuelva un nuevo array con solo los elementos que son mayores que el valor límite.
const filtrarMayorQueLimite = (array,limite) => {
    let resultado = []; //creo un array auxiliar
    for(let i = 0; i < array.length; i++){ //for de toda la vida
        if(array[i]>limite){ //si el numero en este indice es mayor al limite
            resultado.push(array[i]); //lo guardo en el array aux
        }
    }
    return resultado; //retorno el array aux
}

const filtrarMayorQueLimite1Linea = (array,limite) => {
    return array.filter(numero => numero > limite);
}

let array = [1,12,423,465,75];

let arrayFiltradito = array.filter(numero => numero < 10);
console.log(arrayFiltradito);
//Callback = ES UNA FUNCION QUE SE PASA COMO PARAMETRO A OTRA FUNCION