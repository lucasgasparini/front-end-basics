window.addEventListener("load", function () {
    var input = document.getElementById("numberInput");

    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            generateNumberLists();
        }
    });
});

function generateNumberLists() {
    document.getElementById("randomNumbers").innerHTML = "<h2>Números Aleatórios</h2>";
    document.getElementById("ascendingOrder").innerHTML = "<h2>Ordenados de forma crescente</h2>";
    document.getElementById("descendingOrder").innerHTML = "<h2>Ordenados de forma decrescente</h2>";
    document.getElementById("ascendingOdd").innerHTML = "<h2>Ímpares crescentes</h2>";
    document.getElementById("descendingEven").innerHTML = "<h2>Pares decrescentes</h2>";
}