/**
 * 1. Facade desing pattern provide an unified interface to a set of
 * interfaces in a subsystem. Facade defines a higher level interface that makes 
 * the subsystem easier to use.
 * 2. Falls under the catogory of strctural Design pattern
 * 3. We want o provide a simple interface to a complex subsystem.
 * Subsystems often get more complex as they evolve.
 * 4. There are many dependencies between clients and the implementation classes of 
 * an abstraction.
 * 5. We want to layer the subsystems. use a facade to define an entry point
 * to each subsystem level.
 * 6. Facade interface interacts with many complex subsystem and it provides a 
 * cleaner interface to client to access those complex subsystems easily.
 */

class Hotel {
    getMenus() { }
}

class NonVegRestaurant extends Hotel {
    getMenus() {
        //provide non-veg menu
    }
}

class VegRestaurant extends Hotel {
    getMenus() {
        //provide veg menu
    }
}

class VegNonBothRestaurant extends Hotel {
    getMenus() {
        //provide both veg and Non-veg menu
    }
}

/**
 * Now if any classes want to get menus then it will have to go to 
 * respective sections and ask for their menu. Which will be a complex subsystem
 * which client need to interact.
 * 
 * A good solution here is to implement a facade which will interact
 * with all of those sub system and provide a cleaner interface to 
 * client.
 */

//Here Hotelkeeper class is playing role of a Facade.

class HotelKeeper {
    getVegMenu() {
        const vegMenu = new VegRestaurant();
        return vegMenu.getMenus();
    }

    getNonVegMenu() {
        const vegMenu = new VegRestaurant();
        return vegMenu.getMenus();
    }

    getBothMenu() { 
        return {
            ...this.getVegMenu(),
            ...this.getNonVegMenu()
        }
    }
}

/**
 * Now client can consume Hotelkeeper Class APIs to consume whatever menu he wants in simple way
 * Client does not need to look for complex system of getting menus.
 * Client has given that responsiblity of handling complexities to HotelKeeper Facade.
 */

const hotelKeeper = new HotelKeeper();
//Get vegMenu
hotelKeeper.getVegMenu();

//Get NonVeg Menu
hotelKeeper.getNonVegMenu();

//Get Both menus
hotelKeeper.getBothMenu();


