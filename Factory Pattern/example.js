/**
 * Factory desing pattern: It is creational pattern
 * Factory is just an object that creates and manufacture different object
 * Factory is allowing you to allow object creation at centralize location.
 * 
 * Suppose if there are different types of employees class
 */

class Developer {
    constructor(name) {
        this.name = name;
        this.type = "Developer";
    }
}

class Tester {
    constructor(name) {
        this.name = name;
        this.type = "Tester";
    }
}

class EmployeeFactory {

    create(name, type) {
        switch (type) {
            case 1:
                return new Developer(name)
            case 2:
                return new Tester(name)
        }
    }
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Harshal", 1));
employees.push(employeeFactory.create("Vikas D", 2));

employees.forEach((employee) => {
    console.log(employee);
});
