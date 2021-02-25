/**
 * Singleton Design Pattern:
 * Singelton pattern is used to create a single object that can share with the bunch of resources throughout
 * Only one single instance of class will get created and everytime will return same instance while creating new object.
 * It share same state.
 * It restricts instantiation of class to single object
 */

class FancyLogger {
    constructor() {
        if (FancyLogger.instance == null) {
            this.logs = [];
            FancyLogger.instance = this;
        }
        return FancyLogger.instance;
    }

    log(message) {
        this.logs.push(message);
        console.log(`FANCY: ${message}`);
    }

    printLogCount() { 
        console.log(`${this.logs.length} Logs`);
    }
}


//Consume singleton class
const logger = new FancyLogger();
logger.log("Hello");
logger.log("Hello world");
logger.printLogCount();

const logger2 = new FancyLogger();
logger2.log("Hello world");
logger2.log("Hello world 2");
logger.printLogCount();

console.log(logger === logger2);
//Whenever will try to create any new instance of class it will return 
//previous instance
