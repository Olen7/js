export default class Cart{
    _items = []
    constructor(items = []){
        this._items = [...items];
    }
    // isString(name){
    //      if () {
            
    //      }
    // }
    add({name, price}){
//    "add" - додає товар у кошик і повертає true. Якщо в кошику вже є такий товар, 
//   замість додавання виводить повідомлення "ім'я_товару is already exist" та повертає false;
    
    if (this._items.find(item => item.name === name)) {
        console.log(`${name} is already exist`);
        return false
    }
    this._items.push({name, price})
    return true
    }
    remove(name){
        // "remove" - отримує як аргумент ім'я товару і видаляє його з кошика, повертаючи true. 
        // Якщо такого товару немає, виводить повідомлення "ім'я_товару not found" і повертає false;
        if (this._items.find(item => item.name === name)) {
            const index = this._items.findIndex(item => item.name === name)
            this._items.splice(index, 1)
            return true
        }
        console.log(`${name} not found`);
        return false

    }
    // - totalPrice - це має бути геттер, який повертає загальну вартість товарів у кошику;
    // - totalCount - це має бути геттер, який повертає загальну кількість товарів у кошику;
    get totalPrice(){
       return this._items.reduce((acc, item)=>{
            return acc + item.price
        }, 0)
    }
    get totalCount(){
        return this._items.length
    }

   }