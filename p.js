

function sayHi(msg) {
    console.log("Hi, Nomankhial", msg)
}

function greetUser(sayHi) {
    const msg = 'greeting user'
    sayHi(msg)
}

greetUser(sayHi)