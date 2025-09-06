

const EventEmitter = require("events")


class Travellers extends EventEmitter{
    constructor(){
        super()
        this.distCount = 0
    }

    travelTo(distination, speed){
        this.emit('travel', distination, speed)
    }
}

module.exports = Travellers