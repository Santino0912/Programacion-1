
//funcion clasica
function mostrar(){
    //declaramos una variable
    let numero = 15
    //se imprime en la consola del navegador
console.log(numero) 
}

function evaluar(){

    let dato = 22
    //condicion
    if(dato > 10){
        let dato = 77
        console.log(dato)
    }

    console.log(dato)
}

function validar(){
    const valor = prompt('Ingrese calificacion');
    
    
    /*forma 1
    if(valor >= 7){
        alert('Estas aprobado')
    }else{
        alert('Nos vemos en diciembre')
    }*/

    //expresion ternaria
    (valor >= 7) ? alert('estas aprobado') : alert('nos vemos en diciembre')
    

}

//invocamos la funcion "validar"
//validar()


function calcular(){
    //forma 1
    //const dato1 = document.getElementById("inp_dato1").value

    //forma 2
    //const dato1 = document.querySelector("#inp_dato1").value

    //const resultado = dato1 * 10;

    const altura = document.getElementById("altura").value

    const base = document.getElementById("base").value

    const area = (base * altura) / 2

    alert(area)

}
