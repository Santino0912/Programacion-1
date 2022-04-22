function calcular_temp(d1){
    
    const calculo = (d1*1.8)+32 
    
    return calculo
}

function temp_cels(){

    const t_cels= document.getElementById("inp_cels").value

    const temp_faren = calcular_temp(t_cels)

    alert(temp_faren)    
}