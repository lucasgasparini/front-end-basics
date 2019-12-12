window.addEventListener("load", function () {
    var input = document.getElementById("numberInput");

    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            generateNumberLists();
        }
    });
});

function resetLists() {
    document.getElementById("randomNumbers").innerHTML = [];
    document.getElementById("ascendingOrder").innerHTML = [];
    document.getElementById("descendingOrder").innerHTML = [];
    document.getElementById("ascendingOdd").innerHTML = [];
    document.getElementById("descendingEven").innerHTML = [];
}

function generateNumberLists() {
    resetLists();
    const arraySize = document.getElementById("numberInput").value;
    if(arraySize < 10 || arraySize > 100) {
        document.getElementById("errorMessage").innerHTML = "O número deve estar entre 10 e 100!";
    } else {
        document.getElementById("errorMessage").innerHTML = "";
        const numbersArray = Array.from({length: arraySize}, () => Math.floor(Math.random() * 1000));
        orderLists(numbersArray);
    }
}

function orderLists(numbersArray) {
    buildListDisplay("randomNumbers", numbersArray);
    buildListDisplay("ascendingOrder", numbersArray.sort());
    buildListDisplay("descendingOrder", numbersArray.sort(function(a, b){return b-a}));
    buildListDisplay("ascendingOdd", numbersArray.filter((number) => number%2 !== 0).sort(function(a, b){return a-b}));
    buildListDisplay("descendingEven", numbersArray.filter((number) => number%2 === 0).sort(function(a, b){return b-a}));
}

function buildListDisplay(element, list) {
    for (let i = 0; i < list.length; i++) {
        document.getElementById(element).innerHTML += "<span>"+list[i]+"</span>"
    }
}
