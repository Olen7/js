import Pro from "./Product.js"
const washingMachine = new Pro({name:"Lenovo", price: 300, discount: 20,})
const coffeeMachine = new Pro({name:"Lavazza", price: 700, discount: 10,})
console.log(washingMachine);
washingMachine.name = "Samsung"
washingMachine.price = 400
washingMachine.discount = 10
console.log(washingMachine);