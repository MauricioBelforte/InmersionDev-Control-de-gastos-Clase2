



const arregloGastos = [


]

function clickBoton() {
    const inputNombreGasto = document.getElementById("nombreGasto");
    const inputValorGasto = document.getElementById("valorGasto");
    const inputDescripcionGasto = document.getElementById("descripcionGasto");

    let gasto;

    nombreGasto = inputNombreGasto.value;
    valorGasto = parseFloat(inputValorGasto.value);
    descripcionGasto = inputDescripcionGasto.value;

    alertaGastoElevado(valorGasto);
    gasto = { nombre: nombreGasto, valor: valorGasto, descripcion: descripcionGasto };

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
        listaHTML = listaHTML + `<li><p>${cadaGasto.nombre}: $${cadaGasto.valor}</p> <span>Descripcion: ${cadaGasto.descripcion}</span><button onclick="botonEliminarGasto(${indice})">Eliminar </button> </li>`;
        totalGastos = totalGastos + cadaGasto.valor;
    })

    ulListaDeGastos.innerHTML = listaHTML;
    spanTotalGastos.innerHTML = totalGastos.toFixed(2);


}


function limpiar() {

    document.getElementById("nombreGasto").value = '';
    document.getElementById("valorGasto").value = '';
    document.getElementById("descripcionGasto").value = '';

}


function botonEliminarGasto(indice) {
    if (indice !== -1) {
        arregloGastos.splice(indice, 1);
        actualizarListaGastos(); // Actualizar la lista después de eliminar un gasto
    }
}



function alertaGastoElevado(gasto) {
    if (gasto > 150) {
        alert("El gasto es elevado. Valor: $" + gasto)
    }

}


