const EventEmitter = require('node:events'); // It'll returns a event class
const ShopPizza = require('./shop-pizza');

const emitter = new EventEmitter(); // creating a obj
const pizza = new ShopPizza();

emitter.on('order-pizza', (size, _pizza) => {
  console.log(`order received! baking a ${size} pizza`);
})

emitter.on('order-pizza', (size) => {
  if (size === 'large') {
    console.log(`Serving the complimentary drink`);
  }
})

emitter.emit('order-pizza', 'small', 'mushroom')

pizza.on('order', (size) => {
  if(size) {
    console.log('this is good pizza');
  }
})

pizza.order()
pizza.totalOrderNumber()