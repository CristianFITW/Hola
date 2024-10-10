//Funcion que añade un termino después de otro en el display
function appendToDisplay (value) {
    document.getElementById('display').value += value;
}

//Funcion que limpia el display poniendo valores predeterminaods como "", practicamente el valor se cambia a un valor que es un espacio en blanco
function clearDisplay(){
    document.getElementById('display'). value = '';
}

//Funcion que elimima el ultimo termino de una cadena de terminos del display, ejemplo, se tiene en el display 911 y se quita el ultimo termino que sería el 1
function deleteLast(){
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}
//Calcula resultados de acuerdo ingresadi de la calculadora
function calculateResult(){
    try{
        //Realiza la operacion matematica y la despliega en el display
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Expresión inválida');
        //Si se ingresan terminos que hacen que no se pueda efectuar una operación, te marca un error (como el sintaxis error)
}
}