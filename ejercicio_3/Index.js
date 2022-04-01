function calcular_area(){
  
    const base_1 = parseInt(document.getElementById("base_1").value)
    
    const base_2 = parseInt(document.getElementById("base_2").value)
    
    const altura = document.getElementById("altura").value

    let calculo = (base_1 + base_2) * altura

    let resultado = calculo / 2

    alert(resultado)

}