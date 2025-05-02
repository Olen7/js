import * as Person from "./Person.js";
const newStudent = new Person.Student({course: "2", name: "Віктор", lastName: "Кобилянський", birthday: "25.07.1995"})
       console.log(newStudent.getFullName);