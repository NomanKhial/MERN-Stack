
// * Create custom event
const eventEmitter = require("events")
const store = require("./Store")
const Drinks = require("./drinks")

// * instanciate event object from class
const event = new eventEmitter.EventEmitter()

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


// *********************

    //*** Calling Event Once ***//

//  ********************/

event.once('fire-event', (msg)=> console.log(msg))


event.emit("fire-event", 'fire fire fire')
// event.emit("fire-event", 'fire fire fire') prevent triggring listner again


// *********************

    //*** Handling Errors ***//

//  ********************/

const listner = (err)=> console.error(err.message)

event.on("error", listner)

event.emit("error", new Error("Something Went wrong!"))

// *********************

    //*** Cleanup ***//

//  ********************/

event.off("error", listner)


const ourStore = new store()
const drink = new Drinks()
const storeListner = (size, type) => {
    console.log(`you order ${type} pizza, of sized ${size}`)
    drink.serveDrink('zam zam')
}
ourStore.on('order', storeListner)

ourStore.order('large', 'mushroom')
ourStore.orderQuantity()


ourStore.off("order", storeListner)