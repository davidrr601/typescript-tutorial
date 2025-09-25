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



