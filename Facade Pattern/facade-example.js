/**
 * Facade is an structural design pattern:
 * 1. Facade hides the complexities of the system and provides and interface to the client using which client can 
 * access the system.
 * 2. This pattern involves a single class which provides simplified methods required by client/higher level modules/classes
 * and delegates calls to methods of exisitng system.
 */

function getFetch(url, params = {}) {
    const querystring = Object.entries(params).map(param => {
        return `${param[0] = param[1]}`
    }).join('&');

    return fetch(`${url}?${querystring}`,
        {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
}

/**
 * Above getFetch function implement Facade design patterns. It hides all the complexities
 * to consume fetch API and provide clean interfaces to consumer classes.
 * If going ahead we need to replace the fetch with axios then we would be easily replace it with
 * axios without affecting any consumer classes
 */

function getUsers() {
    return getFetch('https://jsonplaceholder.typicode.com/users/')
}

function getUserPosts(userId) {
    return getFetch('https://jsonplaceholder.typicode.com/users/', {
        userId: userId
    })
}

getUsers().then(users => {
    users.forEach(user => {
        getUserPosts(user.id).then(posts => { 
            console.log(user.name);
            console.log(posts.length)
        });
    });
});