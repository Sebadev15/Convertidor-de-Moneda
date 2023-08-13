function convertir() {
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 610;
    let euro = 660;

    if (document.getElementById("uno").checked) {
        resultado = valore * dolar;
        alert("El cambio de Pesos Argentinos a Dólares Estadounidenses es: $" + resultado);
    } else if (document.getElementById("dos").checked) {
        resultado = valore * euro;
        alert("El cambio de Pesos Argentinos a Euros es: €" + resultado);
    } 
    else {
        resultado = NaN
        alert("Tienes que seleccionar una opción (Dólares o Euros)");
        console.warn("El usuario no ingresó correctamente los datos");
    }
}
