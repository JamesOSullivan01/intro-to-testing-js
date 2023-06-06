// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// function sayHello(name) {
//     if (name === undefined) {
//         return "Hello, World!";
//     } else if (name === true) {
//         return "Hello, World!"
//     } else if (name === false) {
//         return "Hello, World!"
//     } else {
//         return `Hello, ${name}!`;
//     }
function sayHello(name) {
    if (typeof name !== 'string') {
        return "Hello, World!";
    } else if (name === '') {
        return "Hello, World!";
    } else {
        return `Hello, ${name}!`;
    }
}

function isFive (number){
    if (number === 5) {
        return true;
    } else {
        return false;
    }
};

function isEven(num) {
    if (typeof num === 'boolean') {
        return false;
    } else if (num === "") {
        return false
    } else if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


