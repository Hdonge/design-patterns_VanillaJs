/**
 * Mediator design pattern
 */

class Member {
    constructor(name) {
        this.name = name;
        this.chatroom = null;
    }

    send(message, toMember) {
        this.chatroom.send(message, this, toMember);
    }

    receive(message, fromMember) {
        console.log(`${fromMember.name} to ${this.name}: ${message}`);
    }
}

class Chatroom {
    constructor() {
        this.members = {};
    }

    addMember(member) {
        this.members[member.name] = member;
        member.chatroom = this;
    }

    send(message, fromMember, toMember) {
        toMember.receive(message, fromMember);
    }
}


const chat = new Chatroom();
const bob = new Member('Bob');
const john = new Member('John');
const tim = new Member('Tim');

chat.addMember(bob);
chat.addMember(john);
chat.addMember(tim);

bob.send("Hey, John", john);
john.send("whats up, bob", bob);
tim.send("Are you okay John", john);
