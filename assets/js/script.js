



const arregloGastos = [


]

function clickBoton() {
    const inputNombreGasto = document.getElementById("nombreGasto")
    const inputValorGasto = document.getElementById("valorGasto")
    let gasto;

    nombreGasto = inputNombreGasto.value;
    valorGasto = parseFloat(inputValorGasto.value);

    gasto = { nombre: nombreGasto, valor: valorGasto };

    console.log(valorGasto);
    console.log(gasto);

    arregloGastos.push(gasto);


    console.log(arregloGastos);


    actualizarListaGastos();
    limpiar();
}



function actualizarListaGastos() {
    const ulListaDeGastos = document.getElementById("listaDeGastos")
    const spanTotalGastos = document.getElementById("totalGastos")

    let listaHTML = '';
    let totalGastos = 0;
    arregloGastos.forEach((cadaGasto, indice) => {
        listaHTML = listaHTML + `<li>${cadaGasto.nombre}: $${cadaGasto.valor} <button onclick="botonEliminarGasto(${indice})">Eliminar </button> </li>`;
        totalGastos = totalGastos + cadaGasto.valor;
    })

    ulListaDeGastos.innerHTML = listaHTML;
    spanTotalGastos.innerHTML = totalGastos.toFixed(2);


}


function limpiar() {

    document.getElementById("nombreGasto").value = '';
    document.getElementById("valorGasto").value = '';


}


function botonEliminarGasto(indice) {
    if (indice !== -1) {
        arregloGastos.splice(indice, 1);
        actualizarListaGastos(); // Actualizar la lista después de eliminar un gasto
    }
}