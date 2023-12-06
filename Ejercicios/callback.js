//Callback = funcion que se pasa como parametro a otra funcion

//Funcion 1 => Utiliza un callback
function bienvenida(callback){
    console.log("Estoy dentro de bienvenida y te saludo");
    callback();
}

//Funcion 2 => Esta funcion es un callback
function saludar(){
    console.log("Holiiss, se va Scaloni");
}

//Ejecucion de la funcion 1, usando como argumento la funcion 2
bienvenida(saludar);

//Utilizar callbacks, que sean funciones anonimas
//Funciones flecha () => {}
bienvenida(() => { console.log("Hola soy una funcion flecha que es un callback"); })


// Creamos nuestro propio forEach
//forEach => recorrer el array y ejecuta cierta funcion de callback
const miArray = [3,22,74,8,10,35,27,7]

//forEach de Javascript
//miArray.forEach(saludar)

function miPropioForEach(array,callback){ 

    for(let i = 0; i < array.length; i++){
        let dato = array[i];
        callback(dato);
    }
}
miArray.forEach(mostrarDato);
miPropioForEach(miArray,mostrarDato);


//mi funcion para imprimir datos
function mostrarDato(valor){
    console.log(valor);
}
mostrarDato(5)