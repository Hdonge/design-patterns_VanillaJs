class AddCommand {
    constructor(valueToAdd) {
        this.valueToAdd = valueToAdd;
    }

    execute(currentValue) {
        return currentValue + this.valueToAdd;
    }

    undo() {
        return currentValue - this.valueToAdd;
    }
}