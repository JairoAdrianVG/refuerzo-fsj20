// Dada una temperatura en grados Celsius, conviértela a grados Fahrenheit.
/*
function celsiusAFahrenheit(celsius){

    let fahrenheit = (celsius * 9/5) + 32;

    return fahrenheit;
    //console.log(fahrenheit);
}
let res = celsiusAFahrenheit(25)

console.log(res);
*/

//Dada una cadena de texto, determina si es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda).
//se lee igual de derecha a izq o al reves
function soyPalindromo(string){
    
    let stringSinEspacios = ''; //creamos una variable para almacenar el texto
    let long = string.length; //guardamos el dato de cuantos valores tiene el texto.

    for(let i = 0; i < long; i++){
        //eliminar los espacios
        if(string[i] !== ' '){ //si es distinto a un espacio vacio entonces
            stringSinEspacios += string[i].toLowerCase(); //guardo todos los char en minus
        }
    }

    for(let j = 0; j < stringSinEspacios.length / 2; j++){ //esta vez con j vamos a recorrer el string sin espacios
        if(stringSinEspacios[j] !== stringSinEspacios[stringSinEspacios.length -1 -j]){ //posicion j avanza y posicion .length -1 -j disminuye.
            return "no es palindromo";//regresamos no es 
        }   
    }
    return "es palindromo" //si paso los dos for y las validaciones entonces si lo es 
}

console.log(soyPalindromo("anita lava la tina"));

function soyPalindromo1For(string){
    // Expresion Regular = '/' separamos en terminos. '[]' colocamos nuestra regla
    // [^a-z] Cualquiera que no coincida con minusculas en ingles
    // [\W_] Cualquiera que sea un caracter especial
    // /g de forma global la busqueda es a todo el toxto
    // , '' remplazalo por este valor
    const texto = string.toLowerCase().replace(/[^a-z]/g,'');

    for(let i = 0; i <texto.length /2; i++){
        if(texto[i] !== texto[texto.length -1 -i]){
            return "no es palindromo";
        }
    }
    return "Es palindromo"
}

console.log(soyPalindromo1For("anita lava la tina"));

function soyPalindromoSinFor(string){
    let texto = string.toLowerCase().replace(/[^a-z]/g,'');
    let res = texto === texto.split('').reverse().join('')

    // Ternario = CONDICION ? CASO TRUE : CASO FALSE;
    return res ? "Es palindromo" : "No es palindromo";
}
console.log(soyPalindromoSinFor("anita lava la tina"));

