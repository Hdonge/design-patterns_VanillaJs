/**
 * Observer design pattern: Behavioral pattern.
 * The Observer Pattern defines a one to many dependency between objects so that 
 * one object change state, all of its dependents are notified and updated automatically.
 * 
 * Subject is one who containes the list of observers and obervers can subscribe the subejct and unsubscribe.
 * Also Subject has notify method which notifies to obervers classes about change in data.
 * Topic is one which extends Subject class and fires notify method when its data changes.
 */

class Subject {

    constructor() {
        this.observers = [];
    }

    subscribe(observerFunction) {
        this.observers.push(observerFunction);
    }

    unsubscribe(observerFunction) {
        this.filteredObservers = this.observers.filter(fn => fn != observerFunction);
        this.observers = this.filteredObservers;
    }

    Notify() {
        this.observers.forEach(fn => {
            fn.call();
        })
    }
}

const subject = new Subject();

function observer1(deviceState) {
    console.log("Observer1 is firing", deviceState);
}

function observer2(deviceState) {
    console.log("Observer2 is firing", deviceState);
}

/* subject.subscribe(observer1);
subject.subscribe(observer2);

subject.Notify();

subject.unsubscribe(observer2);

subject.Notify(); */

//now only Observer1 will get fired


class DeviceState extends Subject {
    constructor() {
        super();
        this.observers = [];
    }

    subscribe(observerFunction) {
        this.observers.push(observerFunction);
    }

    unsubscribe(observerFunction) {
        this.filteredObservers = this.observers.filter(fn => fn != observerFunction);
        this.observers = this.filteredObservers;
    }

    Notify(deviceState) {
        this.observers.forEach(fn => {
            fn.call(null, deviceState);
        })
    }

    deviceStateChanged() {
        this.Notify({ deviceOnline: true });
    }
}

const deviceState = new DeviceState();
deviceState.subscribe(observer1);
deviceState.subscribe(observer2);
deviceState.deviceStateChanged();
