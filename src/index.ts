import http = require("http");


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
        let numeros:number[]=[1,2,3,4];
        console.log(numeros[1])

        let mixto:(number|string)[]=["David","Roman",22,2003];
        console.log(`Me llamo ${mixto[0]} y tengo ${mixto[2]} años`)

        let array2d:number[][]=[[1,2,3],[4,5,6],[7,8,9]];

        console.log(`La posicion 0,0 del array 2d es : ${array2d[0]!=undefined?array2d[0][0]:0}`);

        let numeros2:number[]=[5,6,7,8];
        let numeros3= {...numeros,...numeros2};
        console.log(numeros3);
        numeros3[0]=33;
            //Metodos para manejar arrays
                let add:number[]=[];
                add.push(1,2,3,4,5675);//insertar al final
                console.log(add);
                add.pop();//retirar el ultimo numero annadido
                console.log(add)

                add.unshift(0); //inserta al principio del array
                console.log(add);        
                add.shift()       //retira el primer dato del array
                console.log(add);

                console.log(add.length);//longitud del array

                //Operadores
                    //valor!.length ->La exclamacion indica que el valor no es null
                    //valor?.length -> El interrogante indica que en caso de undefined o null no se ejecuta la funcion length

                //Buscar elementos
                let frutas:String[]=["manzana","pera","fresa","kiwi"];
                console.log(frutas.indexOf("kiwi"));//Devuelve el indice del valor buscado
                    //INCLUDES
                    console.log(frutas.includes("pera"));//Devuelve true/false dependiendo de si lo encuentra en al array
            
                    //FIND
                    console.log(frutas.find(( word:String)=>{return word.length>=5}));//Devuelve el primer valor que cumpla una condicion
                    
                    //FIND INDEX
                    console.log(frutas.findIndex(( word:String)=>{return word.length>=5}));//Devuelve el indice del  primer valor que cumpla una condicion

                    frutas.forEach((valor)=>{valor.length>=5?console.log(valor):null}); //Realiza toda la logica que le indiques en la funcion flecha

                    let modfruta=frutas.map((valor)=>{return valor.toUpperCase()}); // Realiza todos los cambios indicados en la funcion flecha
                    console.log(modfruta);

                    let filterfrutas= frutas.filter((valor)=>{return frutas.length>=5});
                    console.log(filterfrutas);

                    let enteros=[10,20,30,40];
                enteros.reduce((acu,eActu)=>{return acu+=eActu});

                let concat= frutas.reduce((ante,actu)=>{return ante+=" "+actu})
                console.log(concat)

                console.log(frutas.sort());// Ordena el array por string 
                console.log(enteros.sort((a,b)=>{return b-a}))// Con una funcion flecha explicando el orden de ordenacion podemos solucionarlo


                console.log(frutas.slice(0,2));

                console.log(frutas.join("."))

                //Tuplas

                    let info:[String,number];
                    info=["David",18];
                    console.log(info)
                
                //Diccionarios
                    let diccionario ={1:"Paco",2:"Kike"};
                    console.log(diccionario);

                //FUNCIONES DECLARADAS
                /**
                 * Suma dos numeros enteros
                 * @param a Primero numero entero a sumar
                 * @param b Segundo numero entero a sumar
                 * @returns Devuelve la suma de ambos 
                 */
                function sumar(a:number,b:number):number{
                    
                    return a+b;
                }
                let suma = sumar(10,20)
                console.log(suma)

                //FUNCIONES ANONIMAS

                const resta=function(a:number,b:number,c?:number):number{return a-b} //No tiene hosting por lo que solo se puede llamar en el codigo despues de ser declaradas. 
                console.log(resta(10,5))                                             //La ? sirve para poner un parametro opcional
                    //PARAMENTROS POR DEFECTO
                    function potencia(x:number,y:number=2){
                        return x**y
                    }
                    console.log(potencia(2))
                    console.log(potencia(2,6))
                //FUNCIONES FLECHA (parametros)=>{operaciones}
                const fflecha=(a:number)=>{return a};

                //FUNCION CALLBACK
                function math(a:number,b:number,operacion:(a:number,b:number)=>number):number{

                    return operacion(a,b);
                }
                const fsuma=(a:number,b:number)=>{return a+b;};

                math(1,3,fsuma)
                
                //funcion con parametros infinitos
                    function numbers(...valores:number[]){
                            let suma= valores.reduce((pre:number,sig:number)=>{return pre+=sig})
                            console.log(suma);
                    }
                    numbers(1,2,3,4)
                
                //FUNCIONES ASINCRONAS
                    interface DataApi{
                        message:string
                        status:string
                    }

                    async function getApiData(url:string):Promise<DataApi> {
                        const resp=await fetch(url)
                        const datos= resp.json() as Promise<DataApi>;
                        return datos;
                    }
                getApiData("https://dog.ceo/api/breeds/image/random")
                .then((value:DataApi)=>{console.log(value.message)}) //Si encuentra los resustados correctamente usamos el then para realizar lo que queramos
                .catch((error)=>{console.log(error)});   //Si da un error con el catch controlamos lo que ocurrira en este caso mostrar el error

                // DEFINIR OBJETOS
                    //LITERALES
                let persona={
                    id:1,
                    nombre:"juanillo",
                    edad:20,
                    mayoredad:function():boolean{return this.edad>=18?true:false}
                }
                console.log(persona.id);
                console.log(persona.mayoredad());
                persona.edad=15;

                let persona2={
                    id:1,
                    nombre:"juanillo",
                }
                //Se usan normalmente para definir configuraciones como la config fde tu aplicacion o de los alerts

                //TYPE - Plantilla que permite al desarrollador reutilizar codigo

                type User ={
                    readonly id:number,
                    name:string,
                    email?:string,
                    pass:string,
                    isActive:boolean,
                };

                let user1:User={
                    id:1,
                    name:"Dromrod529",
                    email:"d@iescarrillo.es",
                    pass:"123456",
                    isActive:true,
                }
                type PuestoTrabajo={
                    oficio:string,
                    oficina:string,
                }

                type Empleado = User&PuestoTrabajo;

                //type Saludo=`Hola $(number)`;
                //mensaje:Saludo="";
                
                //UNIONES
                type Role= 'admin'|'user'|50;               
                let mirol: Role='admin';
                
                type Userid= User| number;
                let user2: Userid = 20

                type Entidad= 'USER'|'PRODUCTS';
                type Accion= 'CREAR'|'MODIFICAR'|'BORRAR'|'LISTAR'
                
                type Permisos = `${Entidad}_${Accion}`;
                let permiso1:Permisos= 'USER_LISTAR';
                console.log(permiso1);

                //ENUMERADOS
                type TDireccion='NORTE'|'SUR'|'ESTE'|'OESTE'
                enum Direccion{
                    norte='NORTE', //Indica el indice de partida
                    sur='SUR',
                    este='ESTE',
                    oeste='OESTE'
                }

                let d1:TDireccion = 'NORTE'
                let d2:Direccion =Direccion.norte
                console.log(Direccion)
                
                enum EstadoTicket{
                    urgente,
                    abierto,
                    enProceso,
                    cerrado
                }
                let ticket = {
                    nombre:'Paco' ,
                    estado:EstadoTicket.abierto
                    
                }
                    switch(ticket.estado){
                    case 0:
                        console.log('Ticket Abierto')
                    break;
                    case 1:
                        console.log('Ticket en Proceso')
                        break;
                    case 2:
                        console.log('Ticket Cerrado');

                }

                type IdCoche =`id-coche-${number}`
                //INTERFACES
                interface Vehiculo{
                    readonly id: IdCoche,
                    marca: string,
                    color?:string,
                    modelo: string,
                    anno_fab: number,
                    muestraInfo:(propietario:string)=>String
                }

                interface Vehiculo{
                    etiquetaEco: boolean
                }
                let miVehiculo:Vehiculo={
                    etiquetaEco : false,
                    id :'id-coche-1',
                    marca:'Seat',
                    modelo:'Altea',
                    anno_fab:2011,
                    muestraInfo:(propietario:string)=>{return `el propietario del vehiculo es ${propietario}`}
                }

                console.log(miVehiculo.muestraInfo("David"))

                interface Moto extends Vehiculo{
                    tipoManillar: number
                }
                interface Coche extends Vehiculo{
                    tamVolante: number
                }
                let micoche:Coche ={
                    etiquetaEco : false,
                    id :'id-coche-1',
                    marca:'Seat',
                    modelo:'Altea',
                    anno_fab:2011,
                    muestraInfo:(propietario:string)=>{return `el propietario del vehiculo es ${propietario}`},
                    tamVolante:25
                }
                console.log(micoche)

                interface OperacionMatematica {
                    (a:number,b:number):number;
                }
                const sumas:OperacionMatematica = (a:number,b:number)=>a+b;
                const restas:OperacionMatematica= (a:number,b:number)=>{return a-b};
                const multi:OperacionMatematica=function(a:number,b:number){return a*b};

                class Jugador{

                    constructor(public nombre:string,public estaActivo:boolean){}
                    muestraInformacion() {
                        console.log(`el jugador ${this.nombre} ${this.estaActivo?'esta Activo':'No esta activo'}`);
                          
                    }
                }
                let player1= new Jugador("David",true);
                player1.muestraInformacion();





