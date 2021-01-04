/**
 * Strategy Design Pattern
 * All the classes Fedex , UPS and USPS are having same methods in them
 * but the diffrence is implementation of methods are different.
 * 
 * We could use startegy pattern and call the respective methods 
 * by passing reference of company.
 * It allows swap staregy based on passed reference of respective classes.
 * 
 */

class Fedex {
    constructor() { }

    calculate(pkg) {
        //Fedex calculation
        return 2.45
    }
}

class UPS {
    constructor() { }

    calculate(pkg) {
        //Fedex calculation
        return 1.56
    }
}

class USPS {
    constructor() { }

    calculate(pkg) {
        //Fedex calculation
        return 2.45
    }
}

const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();
const pkg = { from: 'alabama', to: 'Georgia', weight: 1.56 }

class Shipping {
    constructor() {
        this.company = '';
    }

    setStrategy(company) {
        this.company = company;
    }

    calculate() {
        return this.company.calculate(pkg);
    }
}

const shipping = new Shipping();
shipping.setStrategy(fedex);
console.log("Fedex: " + shipping.calculate(pkg));

shipping.setStrategy(ups);
console.log("UPS: " + shipping.calculate(pkg));

shipping.setStrategy(usps);
console.log("USPS: " + shipping.calculate(pkg));
