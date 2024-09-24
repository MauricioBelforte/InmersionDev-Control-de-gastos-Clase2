


const arregloGastos = [


]


let indiceEdicion = -1; // Variable global para guardar el índice del gasto a modificar


function clickAgregarGasto() {
    const inputNombreGasto = document.getElementById("nombreGasto");
    const inputValorGasto = document.getElementById("valorGasto");
    const inputDescripcionGasto = document.getElementById("descripcionGasto");

    let gasto;

    const nombreGasto = inputNombreGasto.value;
    const valorGasto = parseFloat(inputValorGasto.value);
    const descripcionGasto = inputDescripcionGasto.value;

    alertaGastoElevado(valorGasto);
    gasto = { nombre: nombreGasto, valor: valorGasto, descripcion: descripcionGasto };

    console.log(valorGasto);
    console.log(gasto);


    arregloGastos.push(gasto);


    console.log(arregloGastos);


    actualizarListaGastos();
    limpiarCampos();
}


function clickGuardarCambiosGasto() {

    if (indiceEdicion >= 0) {
        let nombre = document.getElementById("nombreGasto").value;
        let valor = parseFloat(document.getElementById("valorGasto").value);
        let descripcion = document.getElementById("descripcionGasto").value;

        // Actualizar el gasto existente
        arregloGastos[indiceEdicion] = { nombre, valor, descripcion };
        indiceEdicion = -1; // Resetear el índice de edición

        // Mostrar el botón de agregar y ocultar el de actualizar
        document.getElementById("botonAgregarGasto").style.display = "inline";
        document.getElementById("botonGuardarCambiosGasto").style.display = "none";

        actualizarListaGastos(); // Actualizar la lista de gastos
        limpiarCampos(); // Limpiar los campos de entrada
    }

}


function actualizarListaGastos() {
    const ulListaDeGastos = document.getElementById("listaDeGastos")
    const spanTotalGastos = document.getElementById("totalGastos")

    let listaHTML = '';
    let totalGastos = 0;
    arregloGastos.forEach((cadaGasto, indice) => {
        listaHTML = listaHTML + `<li><p>${cadaGasto.nombre}: $${cadaGasto.valor}</p> <span>Descripcion: ${cadaGasto.descripcion}</span> <button onclick="botonEliminarGasto(${indice})">Eliminar </button> <button onclick="botonModificarGasto(${indice})">Modificar </button> </li>`;
        totalGastos = totalGastos + cadaGasto.valor;
    })

    ulListaDeGastos.innerHTML = listaHTML;
    spanTotalGastos.innerHTML = totalGastos.toFixed(2);


}


function limpiarCampos() {

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


function botonModificarGasto(indice) {

    // Obtener el gasto correspondiente al índice
    let gasto = arregloGastos[indice];

    // Asignar los valores del gasto a los campos de entrada
    document.getElementById("nombreGasto").value = gasto.nombre;
    document.getElementById("valorGasto").value = gasto.valor;
    document.getElementById("descripcionGasto").value = gasto.descripcion;

    indiceEdicion = indice; // Guardar el índice del gasto a modificar

    // Mostrar el botón de actualizar y ocultar el de agregar
    document.getElementById("botonAgregarGasto").style.display = "none";
    document.getElementById("botonGuardarCambiosGasto").style.display = "inline";

}


function alertaGastoElevado(gasto) {
    if (gasto > 150) {
        alert("El gasto es elevado. Valor: $" + gasto)
    }

}


