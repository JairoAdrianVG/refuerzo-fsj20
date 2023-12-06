//METODOS DE ARRAYS
//Foreach, map, filter, find, reduce y some.

const chiques = [
    {
        nombre: "Jairo Vega",
        edad: 25,
        pais: "Argentina",
        estadocivil: "casado"
    },
    {
        nombre: "Jonathan Carranza",
        edad: 22,
        pais: "El Salvador",
        estadocivil: "soltero"
    },
    {
        nombre: "Rudy Rivera",
        edad: 30,
        pais: "El Salvador",
        estadocivil: "Soltero"
    },
    {
        nombre: 'Roberto Alferes',
        edad: 29,
        pais: 'El Salvador',
        estadocivil: 'soltero'
    },
    {
        nombre: "Daniel An",
        edad: 21,
        pais: "El Salvador",
        estadocivil: "soltero"
    },
    {
        nombre: "Melissa Trejos",
        edad: 30,
        pais: "Colombia",
        estadocivil: "soltera"
    },
    {
        nombre: "Daniel Ochoa",
        edad: 18,
        pais: "Colombia",
        estadocivil: "Soltero"
    },
    {
        nombre: "Gabriel Quintanilla",
        edad: "25",
        pais: "El Salvador",
        estadocivil: "soltero"
    },
    {
        nombre: "Ricardo Benitez",
        edad: "22",
        pais: "El Salvador",
        estadocivil: "soltero"
       },
       {
        nombre : "Mirna Lemus",
        edad: 20,
        pais: "El Salvador",
        estadocivil: "Soltera"
     },
     {
        nombre: 'Annie Ochoa',
        edad: 30,
        pais: 'Colombia',
        estadocivil: 'casada'
       },
       {
        nombre: "Eduardo Solórzano",
        edad: 89,
        pais: "Guatemala",
        estadocivil: "Soltero"
    },
    {
    nombre: 'Tommy Ponce', 
    edad: 40, 
    pais: 'Honduras', 
    estadocivil: 'casado'},
    {
        nombre: 'Elvin Franco',
        edad: 29,
        pais: 'República Dominicana',
        estadocivil: 'soltero'
    },
    {
        nombre: 'Alexander Reyes',
        edad: 25,
        pais: 'El Salvador',
        estadocivil: 'soltero'
      }
];

//console.log(chiques);

//Dado un array de objetos imprimir todos los objetos que contiene este mismo
/*
for(let i = 0; i < chiques.length; i++){
    console.log(chiques[i]);
}

// Foreach = POR CADA ELEMENTO HACE LO QUE LE DIGAMOS

//forEach(nombreDeCadaVALOR => {hace esta logica con nombreDeCadaVALOR})
chiques.forEach(alumno => {
    console.log(alumno);
} );

//A traves del mismo array, imprimir solo los nombres de los alumnos

chiques.forEach(alumno => {
    console.log(alumno.nombre);
} );
*/
//Imprimir solo los alumnos cuyo pais sea Argentina
chiques.forEach(alumno => {
    alumno.pais == "Argentina" ? console.log(alumno) : "Por suerte no hay argentinos";
} );

//Retornar un nuevo array con los alumnos cuya edad sea mayor a 23
let arrayNuevo = [];
chiques.forEach( alumno => {
    if(alumno.edad > 23){
        arrayNuevo.push(alumno);
    } 
})

arrayNuevo.length > 0 ? console.log(arrayNuevo): console.log("Todos somos jovenes");

//FUNCION EXPRESADA VS FUNCION FLECHA

function saludar(callback){
    console.log(`Hola, como andis?`);
    callback();
}

function despedirse(){
console.log("Besitos besitos chau chau");
}

const saludo = (callback) => {
    console.log("Hola, como andis?");
    callback();
}

const despedida = () => {
    console.log("Besitos besitos chau chau ");
}

saludo(despedida);
//Callback => Es una funcion llamada dentro de otra, la cual se debe recibir por parametro

saludar(despedirse);

//ForEach = Recorre el array y te da el valor de cada indice
const mostrarObjeto = (objeto) => {console.log(objeto);}

chiques.forEach(objeto => {
    console.log(objeto);
})

//Imprimir datos en las posiciones del array
for(let i = 0; i < chiques.length; i++){
    objeto = chiques[i]; //cada posicion del array se llama ahora objeto
    console.log(objeto); 
}

