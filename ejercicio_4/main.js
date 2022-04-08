function calcular_area_circ(d1){

    const etapa1 = Math.pow(d1,2)
    const resultado = Math.PI * etapa1
    //entrega una respuesta
    return resultado

}


function mostrar_area(){
    
    const dato1 = document.getElementById("inp_radio").value

    //invocamos(ejecutamos) a la funcion, pero ademas le enviamos un parametro
    //ademas recibimos una respuesta por parte de la funcion calcular_area_circ
    const respuesta = calcular_area_circ(dato1)
    
    alert(respuesta)

}

