const EventEmitter = require('node:events')

class ShopPizza extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order() {
    this.orderNumber++;
    this.emit('order', 'large')
  }

  totalOrderNumber() {
    console.log('current order number', this.orderNumber);
  }
}

module.exports = ShopPizza;