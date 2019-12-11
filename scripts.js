window.addEventListener("load", function () {
    var input = document.getElementById("numberInput");

    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            generateNumberLists();
        }
    });
});

function generateNumberLists() {
    document.getElementById("numberText").innerHTML = document.getElementById("numberInput").value;
}