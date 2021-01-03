/**
 * Builder pattern aims to Seperate the constrcution of a complex object from its
 * represenatation so that the same construction process can create different representation
 * It is used to create complex object step by step and the final step will return the object
 * The constructing an object should be generic so that it can be used to create 
 * different representation of same object.
 * 
 * It belongs to creational pattern
 * 
 * Seperate construction of complex object from its representation
 * So that the same construction process can create different represenatation
 * 
 * Important: Builder pattern solves the situation of increasing contructor parameters
 * and constructors of a given class by providing a step by step initialization of Parameters.
 * After step by step initialization. it returns the resulting constructed object at once.
 * 
 * choose builder pattern when we need to break up the constrcution of a complex object.
 * We need to create a complex object and it should be independent of the parts that make up the object
 * 
 * The construction process must allow multiple represenatation of the same class
 */


class Address {
    constructor(zip, street) {
        this.zip = zip
        this.street = street
    }
}

class User {
    constructor(name, age, phone, address) {
        this.name = name
        this.age = age
        this.phone = phone
        this.address = address
    }
}

class UserBuilder {
    constructor(name) {
        this.user = new User(name)
    }
    setAge(age) {
        this.user.age = age
        return this;
    }
    setPhone(phone) {
        this.user.phone = phone
        return this;
    }
    setAddress(address) {
        this.user.address = address
        return this;
    }
    build() {
        return this.user
    }
}

let user = new UserBuilder("Harshal").setAge(10).setPhone('11111').build();
console.log(user);