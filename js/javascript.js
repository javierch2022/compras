document.getElementById('agregar').addEventListener("click", agregarItemMonto);
document.getElementById('calcular').addEventListener("click", calcularMontoTotal);
document.getElementById('reset').addEventListener("click", form.reset);


function agregarItemMonto() {

    let itemInput = document.getElementById("item").value;
    let montoInput = document.getElementById("monto").value;


    document.getElementById("body").innerHTML += `
    <tr>
        <td class="col-sm-8">${itemInput}</td>
        <td class="col-sm-4">${montoInput}</td>
    </tr>`;
}


function calcularMontoTotal() {
    let total = 0;

    let arregloMontos = document.querySelectorAll("td + td");
    console.log(arregloMontos);


    [].forEach.call(arregloMontos, (celda) => {
        if (parseFloat(celda.firstChild.data)) {
            total += parseFloat(celda.firstChild.data);
        }
    });


    document.getElementById("total").innerHTML = `
    <td class="col-sm-4" id="total">$ ${total}</td>
    `;
}

function refrescarPagina() {
    location.reload();
}