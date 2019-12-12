window.addEventListener("load", function () {
    var input = document.getElementById("numberInput");

    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            generateNumberLists();
        }
    });
});

function generateNumberLists() {
    const arraySize = document.getElementById("numberInput").value;
    const numbersArray = Array.from({length: arraySize}, () => Math.floor(Math.random() * 1000));
    orderLists(numbersArray);
}

function orderLists(numbersArray) {
    document.getElementById("randomNumbers").innerHTML = numbersArray;
    document.getElementById("ascendingOrder").innerHTML = numbersArray.sort();
    document.getElementById("descendingOrder").innerHTML = numbersArray.sort(function(a, b){return b-a});
    document.getElementById("ascendingOdd").innerHTML = numbersArray.filter((number) => number%2 !== 0).sort(function(a, b){return a-b});
    document.getElementById("descendingEven").innerHTML = numbersArray.filter((number) => number%2 === 0).sort(function(a, b){return b-a});
}