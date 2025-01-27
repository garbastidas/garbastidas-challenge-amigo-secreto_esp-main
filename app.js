// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listAmigos = [];
let lectorSortearAmigo = false;

function agregarAmigo() {
    console.log(lectorSortearAmigo);
    let amigo = document.getElementById('amigo').value;

    if(amigo === ''){
        alert('Ingrese un nombre válido');
    } else {
        if(listAmigos.includes(amigo)){
            alert('Ya está este nombre, agrega un diferenciador');
            limpiarCaja();
            agregarAmigo();
        } else {
            let listaLectura = document.getElementById('listaAmigos'); 
            let amigoEnlistado = document.createElement('li');
        
            amigoEnlistado.innerHTML = amigo;
            listaLectura.appendChild(amigoEnlistado); 
        
            listAmigos.push(amigo);
        }  
    }
    actualizarSorteo();
    limpiarCaja();   
}

function sortearAmigo() {
    if(lectorSortearAmigo == true){
        nuevaListaAmigos();
        return;
    } else {
        limpiarListaAmigos();
        limpiarListaResultado();
        console.log(listAmigos);
        let numeroListAmigos = Math.floor(Math.random()*listAmigos.length);
        let listaResultado = document.getElementById('resultado');
        let amigoSecreto = document.createElement('li');
        amigoSecreto.innerHTML = 'El amigo secreto es ' + listAmigos[numeroListAmigos];
        listaResultado.appendChild(amigoSecreto);
    }

    lectorSortearAmigo =  true;
    return;
}
function actualizarSorteo() {
    limpiarListaResultado();
    lectorSortearAmigo = false;
}
function nuevaListaAmigos() {
    listAmigos = [];
    alert('Ingrese los amigos otra vez para realizar un nuevo sorteo')
}
function limpiarListaAmigos() {
    document.getElementById('listaAmigos').innerHTML = '';
}
function limpiarListaResultado(){
    document.getElementById('resultado').innerHTML = '';
}
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}