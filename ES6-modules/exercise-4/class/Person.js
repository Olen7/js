export class Person{
    #name
    #lastName
    #birthday
    constructor({name, lastName, birthday}){
      this.#name = name;
      this.#lastName = lastName;
      this.#birthday = birthday;// 25.07.1995
    }
   get getFullName(){
     return `${this.#name} ${this.#lastName}`
    }
    // getAge - вираховує вік;
    get getAge(){
        const year = Number(this.#birthday.split(".").pop()) 
         return 2025 - year
    }

   }
   export class Student extends Person{
    #course
    #tabel = {}
    constructor({course, ...props}){
        // super()
        // 
        super(props)
        this.#course = course
    }
    addScore(score, subject){
        const subTabel = this.#tabel[this.#course]
        if (subTabel) {
            if (!subTabel[subject]) {//this.#tabel[this.#course][subject]
                subTabel[subject] = score
            }
        }else{
            this.#tabel[this.#course] = {[subject]: score};// як що назва властивості зберігається в зміній то ми її берем в квадратні дужки
        }
    }

   }
   console.log(Person);
