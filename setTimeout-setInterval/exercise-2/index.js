/*
Створіть об'єкт user, у якому буде дві властивості: name і lastName,
 а також гетер fullName, який повертає повне ім'я користувача.
 Викликайте це гетер через 2 секунди після завантаження сторінки.
*/
const user = {
    name: "Mykola",
    lastName: "Olen",
    getFullName(){
        console.log(this);
        return `${this.name} ${this.lastName}` 
    }
}
user.getFullName()
  setTimeout(() => user.getFullName(), 2000)