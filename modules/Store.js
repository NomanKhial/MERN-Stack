
const eventEmitter = require("events")

class store extends eventEmitter {
    constructor(){
        super( )
        this.orderCount = 0
    }

    order(size, type){
            console.log("order has been made!")
            this.emit('order', size, type)
    }

    orderQuantity(){
        this.orderCount++
        console.log(`order count is ${this.orderCount}`)
    }
}

module.exports = store