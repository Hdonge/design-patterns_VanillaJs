class Calculator {
    constructor() {
        this.value = 0;
    }

    add(value) {
        this.value = this.value + value;
    }

    subtract(value) {
        this.value = this.value - value;
    }

    multiply(value) {
        this.value = this.value * value;
    }

    divide(value) {
        this.value = this.value / value;
    }
}

const calculator = new Calculator();
calculator.add(10);
calculator.divide(2);
console.log(calculator.value);