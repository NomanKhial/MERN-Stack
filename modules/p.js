const Travellers = require("./pclass");


const tObj = new Travellers()

const travelListner = (dist, speed) => console.log(`Noman travels to ${dist} at ${speed}km per hour`)
tObj.on('travel', travelListner)

tObj.travelTo('Japan', 33333333333)

tObj.off('travel', travelListner)