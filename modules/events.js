
// * Create custom event
const eventEmitter = require("events")

// * instanciate event object from class
const event = new eventEmitter()

// * Peform some logic once event happens
event.on('MakeCustomEvent', ()=>console.log("Custom event has created!"))

// * emit event to trigger the callback call
event.emit('MakeCustomEvent')