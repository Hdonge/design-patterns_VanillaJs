class Address {
    constructor(zip, street) {
        this.zip = zip
        this.street = street
    }
}

class User {
    constructor(name, { age, phone = '12346', address } = {}) {
        this.name = name
        this.age = age
        this.phone = phone
        this.address = address
    }
}

let user = new User('Harshal', { age: 28, phone: '1234567891', address: new Address('1', 'Main') });

console.log(user)