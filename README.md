# Alura Challenge: Amigo Secreto

### - Autor: Gustavo Ropero

## Objetivo

Escribir un programa de amigo secreto en lenguaje Javascript que realice un sorteo de una lista de nombres (amigos), donde se ingresa un nombre, la pantalla muestra los nombres almacenados y cuando sortea los nombres la ventana muestre al amigo asignado como amigo secreto.

## Programa

La construcción del programa consistió en el desarrollo de diferentes funciones las cuales se pueden dividir en los siguientes campos:
### - Lectura de nombre
- **agregarAmigo()**: Adquiere el valor del dato ingresado en _placeholder_ si el string es vacío y un nombre no está repitido. Si ambas condiciones se cumplen, agrega el nombre a la lista de amigos.
### - Sorteo de nombre
- **sortearAmigo()**: Realiza el sorteo de la lista de amigos por medio de la generación de un número aletorio entre 0 y el tamaño de la lista menos uno. Después, muestra al amigo escogido en la lista resultado.
### - Lógica de funcionamiento 
- **actualizarSorteo()**: Limpia la lista resultado y reinicia la función *sortearAmigo()*.
- **nuevaListaAmigos()**: Limpia el arreglo de lista de amigos y lanza una alerta para invitar a ingresar nuevo nombres o los mismos.
- **limpiarListaAmigos()**: Limpia a lista de amigos del archivo html.
- **limpiarListaResultado()**: Limpia a lista de resultado del archivo html.
- **limpiarCaja()**: Limpia el valor del _placeholder_.