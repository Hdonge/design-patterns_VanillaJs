var mySingleton = (function () {
    var instance;

    function init() {
        //private methods and variables
        function privateMethod() {
            console.log("I am private");
        }

        var privateVariable = "I am also private variable";

        var privateRandomNumber = Math.random();

        return {
            publicMethod: function () {
                console.log("The public can see me!");
            },
            publicProperty: "I am also public",
            getRandomNumber: function () {
                return privateRandomNumber;
            }
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();

//Usage:
const singleA = mySingleton.getInstance();
const singleB = mySingleton.getInstance();

console.log(singleA === singleB);