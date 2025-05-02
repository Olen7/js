const strAsISON = `{"name": "Bohdan", "lastName": "Liamzin", "age": 39, "marriage": true}`;
// console.log(strAsISON);
// console.log(JSON.parse(strAsISON))

const person = {
    country: "Germany"
}

const user = {
    birthday: "03.01.1986",
    place: 'Leipzig',
    get age() {

    },
    education: undefined
};
user.__proto__ = person;
const userToStr = JSON.stringify(user);
console.log(userToStr);
console.log(JSON.parse(userToStr));

const car1 = {
    model: "BMW"
};
const car2 = {
    model: "BMW"
};
console.log(JSON.stringify(car1) === JSON.stringify(car2));
console.log(JSON.stringify(1));
console.log(JSON.stringify("user"));
console.log(JSON.stringify(true));
console.log(JSON.stringify(null));
console.log(JSON.stringify(undefined));