function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        var number = parseInt(prompt("Введите число:"));
        if (!isNaN(number)) {
            this.value += number;
            document.getElementById("value").textContent = this.value;
        } else {
            alert("Вы ввели некорректное число!");
        }
    }
}

var cart = new Accumulator(10);

function addToCart() {
    cart.read();
}