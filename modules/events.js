
// // * Create custom event
// const eventEmitter = require("events")
// const store = require("./Store")
// const Drinks = require("./drinks")
// const { EventEmitter } = require("stream")

// // * instanciate event object from class
// const event = new eventEmitter.EventEmitter()

// // * Peform some logic once event happens
// event.on('MakeCustomEvent', ()=>console.log("Custom event has created!"))

// // * emit event to trigger the callback call
// event.emit('MakeCustomEvent')




// // *********************

//     //*** Emitting Multiple Events ***//

// //  ********************/

// event.on("order-pizza", (size, type)=>{
//     console.log(`Hey you've ordered ${type} pizza, of sized ${size}`)
//  })

// event.on("order-pizza", (size, type)=>{
//     console.log(`Hey you've made ${type} pizza, of sized ${size}`)
// })
// event.emit('order-pizza', "large", "mushroom")
// event.emit('order-pizza', "small", "candy")


// // *********************

//     //*** Calling Event Once ***//

// //  ********************/

// event.once('fire-event', (msg)=> console.log(msg))


// event.emit("fire-event", 'fire fire fire')
// // event.emit("fire-event", 'fire fire fire') prevent triggring listner again


// // *********************

//     //*** Handling Errors ***//

// //  ********************/

// const listner = (err)=> console.error(err.message)

// event.on("error", listner)

// event.emit("error", new Error("Something Went wrong!"))

// // *********************

//     //*** Cleanup ***//

// //  ********************/

// event.off("error", listner)


// const ourStore = new store()
// const drink = new Drinks()
// const storeListner = (size, type) => {
//     console.log(`you order ${type} pizza, of sized ${size}`)
//     drink.serveDrink('zam zam')
// }
// ourStore.on('order', storeListner)

// ourStore.order('large', 'mushroom')
// ourStore.orderQuantity()


// ourStore.off("order", storeListner)

// EventEmitter.defaultMaxListeners = 2


const EventEmitter = require('events')

// EventEmitter.defaultMaxListeners = 2 //? here we have specified the number of listener for the complete emitter 

const event = new EventEmitter()

 event.setMaxListeners(7) //? aditionally we can set it here aswell specific to a single event

event.on('load', ()=> console.log('Hello'))
event.on('load', ()=> console.log('Hello'))
event.on('load', ()=> console.log('Hello')) // max event that can be attached is



// * Prepend listners have more periority
event.prependListener('load', ()=> console.log('I am prepend lisner'))
event.prependListener('load', ()=> console.log('I am prepend lisner X2'))

// * prepend once has the most priority
event.prependOnceListener('load', ()=>console.log('i am prepend once listner, and i excute first'))
event.prependOnceListener('load', ()=>console.log('i am prepend once listner, and i excute first X2'))

// event.emit('load')


// ! Behaviour of events in nodejs 

// * By default nodejs EventEmitter fires syncronous events but we can make it async using setImmediate() or process.nextTick()

// todo lets see how we can accomplish this behaviour

console.log('before async call for event')
event.on('async-event', (name)=>{
    setImmediate(()=>{
        console.log(`async operation for ${name} completed!`)
    })
})


event.emit('async-event', 'Programming')

console.log('after async call for event')
