export default class Product{
    _name; 
    _price;
    _discount
    constructor({name, price, discount}){
       this._name = name;
       this._price = price;
       this._discount = discount;
    }

    get name(){
        return this._name
    }
    set name(name){
        if (typeof name === "string" && name.trim() !== "") {
            this._name = name
        }
    }

    #isNumber(value){
        return (typeof value === "number" && Number.isFinite(value))   
    }

    get price(){
        if (this._discount > 0 && this._discount < 100) {
        }
        return this._price
    }
    set price(price){
        if (this.#isNumber(price) && price > 0) {
            this._price = price
        }
    }

    get discount(){
        return this._discount
    }
    set discount(discount){
        if (this.#isNumber(discount) && discount > 0 && discount > 100) {
            this._discount = discount
        }
       
    }

   }