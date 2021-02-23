const os = require('os');

const Math = {}

function sum(){

    return a + b;
}

function resta(){

    return a - b; 
}

function producto(){

    return a * b;
}

function divide(){

    if (b == 0){

        console.log("No es valido hallar el resto de una division por cero");
    }
    else{
        return a % b;
    }
}

function mod(){

    if (b == 0){

        console.log("No es valido hallar el resto de una division por cero");
    }
    else{
        return a % b;
    }
}


Math.sum = sum;
Math.resta = resta;
Math.producto = producto;
Math.divide = divide;
Math.mod = mod;

module.exports = Math;