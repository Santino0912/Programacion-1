function calcular_baskara(d1,d2,d3){

    const etapa1 = Math.pow(d2,2)-(4*d1*d3)
    const etapa2 = Math.sqrt(etapa1)
    const etapa3 = -(d2) + etapa2
    const etapa3b = -(d2) - etapa2
    const resultado1 = (etapa3/(2 * d1))
    const resultado2 = (etapa3b/(2 * d1))

    return resultado1+' '+resultado2
    
}

function mostrar_resultado(){

    const dato1 = document.getElementById("inp_dato1").value
    const dato2 = document.getElementById("inp_dato2").value
    const dato3 = document.getElementById("inp_dato3").value

    const respuesta = calcular_baskara(dato1,dato2,dato3)

    alert(respuesta)
}