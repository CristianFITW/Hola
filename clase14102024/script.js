//alert("Quetachendo");


//Funciones
//function hello() {
//    console.log('Hola.js');
//}

//function hello() {
//    return "Hola ramirez";
//}

//const result = hello();
//hello();



//Retorna objeto vacio
//function hello(){
//    return {};
//}

//console.log(hello());

/*
function hello() {
    return {
        nombre: 'Raul'
    }
}

console.log(hello());
*/

// Funcion que retorna otra funcion
/*
function hello() {
    return function () {
        return 'Hola 35'
    }
}

console.log(hello()());
*/

//========= USO DE PARAMETROS EN FUNCIONES ==========//

/*
function hellconJS(name) {
    return 'Hola' + name
}

console.log('Cristian');
console.log('Paul');
console.log('George');
console.log('Ringo');
console.log('John');
*/

//Pasar mas de un parametro a la funcion
/*
function hellconJS(x, y) {
    return x + y;

}

console.log(hellconJS(10, 20));
console.log(hellconJS(10));
*/


/*
function hellconJS(x, y) {
    if (y == null){
        y=9;
    }
    return x * y;
}

console.log(hellconJS(10));
*/


//======= OBJETOS ========//
const user = {
    nombre : 'Cristian',
    apellido : 'Gutiérrez',
    edad : 50,
    edoCivil : 'Separado',
    domicilio : {
        ciudad : 'Estado de México',
        calle : 'En una calle',
        numero : 123456789
    },
    amigos : ['Mario', 'Luis'],
    activo : false,
    senMensaje: function() {
        return 'Enviando msj'
    }
}

//alert ciudad, calle, numero
//consola, amigos, nombre, apellidos, estado civil
// alert (Activo o dado de baja), (estado del mensaje)

alert(user.domicilio.ciudad, user.domicilio.calle, user.domicilio.numero);

console.log(user.amigos, user.nombre, user.apellido, user.edoCivil);

alert(user.senMensaje(), user.activo);