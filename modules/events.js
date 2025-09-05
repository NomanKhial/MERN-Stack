
// * Create custom event
const eventEmitter = require("events")

// * instanciate event object from class
const event = new eventEmitter()

// * Peform some logic once event happens
event.on('MakeCustomEvent', ()=>console.log("Custom event has created!"))

// * emit event to trigger the callback call
event.emit('MakeCustomEvent')




// *********************

    //*** Emitting Multiple Events ***//

//  ********************/

event.on("order-pizza", (size, type)=>{
    console.log(`Hey you've ordered ${type} pizza, of sized ${size}`)
})

event.on("order-pizza", (size, type)=>{
    console.log(`Hey you've made ${type} pizza, of sized ${size}`)
})
event.emit('order-pizza', "large", "mushroom")
event.emit('order-pizza', "small", "candy")
