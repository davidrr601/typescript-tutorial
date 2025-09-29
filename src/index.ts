//Tipos de Variables
var x ="David";
if(true){
    x="maria";// Visible en todo el conjunto
}
console.log(x);
if(true){
    let y="Paconi"; //Visible solo desde el bloque
}
const z="2"; //No modificable 

//Tipos de Datos
let num: number = 0;
let text:string ="Kike Montilla"
let bandera: boolean= true;

//Tipos de Datos Especiales
    //tipo Any
let valor:any="Ninio Maravilla";
valor= 123;
valor = false;
valor= "LOS DIOZE";
console.log(valor.toLowerCase());
    //Tipo Unknown
let desconocido:unknown;
desconocido ="Wanillo Kokunero";
desconocido= 456;
desconocido=false;
if(typeof(desconocido)=="string"){
    console.log(desconocido.toLowerCase());
}
    //Tipo void
        //Vacio ,ej: si no queremos que nos devuelva nada una funcion

//CONCATENAR
    let nombre="Paco";
    console.log("El ganador del balon d'or es: "+ nombre);


// ARRAYS
let numeros:number[]=[1,2,3,4];3
console.log(numeros[1])

let mixto:(number|string)[]=["David","Roman",22,2003];
console.log(`Me llamo ${mixto[0]} y tengo ${mixto[2]} años`)

let array2d:number[][]=[[1,2,3],[4,5,6],[7,8,9]];

console.log(`La posicion 0,0 del array 2d es : ${array2d[0]!=undefined?array2d[0][0]:0}`);

let numeros2:number[]=[5,6,7,8];
let numeros3= {...numeros,...numeros2};
console.log(numeros3);
numeros3[0]=33;

