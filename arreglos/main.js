
let facturas = ['Cara sucia','Medialunas-dulces','cañoncitos de dulce de leche','cañoncitos de crema pastelera']

//como saber la longitud de un arreglo
//es la cantidad de elemento de un arreglos
const longitud = facturas.length
console.log('Longitud: '+longitud)

//como acceder a un elemento del array medainte su indice
const primero = facturas[0]
console.log('el primer elemento es: '+primero)

//como acceder al ultimo elemento de un arreglo
const ultimo = facturas[longitud-1]
console.log('el ultimo elemento del arreglo es: '+ultimo)

//como recorrer un array haciendo uso de un foreach
facturas.forEach( (element,index) => {
    console.log(index+'-'+element)
});

//como agregar un elemento nuevo al final del arreglo
facturas.push('Rosquitas')
console.log(facturas)

//como eliminar al ultimo elemento de un arreglo
facturas.pop()
console.log(facturas)

//como agregar un elemento al inicio del arreglo
facturas.unshift('rosquitas')
console.log(facturas)

//como eliminar el primer elemento de un arreglo
facturas.shift('rosquitas')
console.log(facturas)

//como obtener el indice de un elemento
const indice = facturas.indexOf('cañoncitos de dulce de leche')
console.log('el indice del cañoncito es: '+indice)

//como eliminar un elemento del arreglo  haciendo uso de su indice
facturas.splice(indice, 1)
console.log(facturas)

//como eliminar mas de un elemento de un arreglo
const indice_al = facturas.indexOf("Medialunas-dulces")
//ademas de quitar elementos tambien nos informa de los elementos eliminados
const eliminados=facturas.splice(indice_al, 2)
console.log('eliminados: '+eliminados)


//como generar una copia de un arreglo
const replica_facturas = facturas.slice()
replica_facturas.push('rosquitas','cañoncitos de dulce de leche','churros')
console.log('copia: '+replica_facturas)
console.log('original: '+facturas)

//como agregar elementos en el medio de un elemento
facturas.splice(2,0,"biscochitos")
console.log(facturas)
