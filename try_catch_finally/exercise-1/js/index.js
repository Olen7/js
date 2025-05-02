/*
Напишіть код заповнення табеля: запитуєш у користувача запис у форматі рядка, 
де оцінка та предмет розділені двокрапкою та пробілом, наприклад "Математика: 10".
Розділяєш строку на предмет на оцінку та записуєш в об'єкт tabel. Далі запитуєш знову,
поки користувач не натисне Cancel. Треба врахувати такі помилки:
1. Користувач розділив оцінку та предмет не ":" або забув ввести оцінку (тобто ввів: "Математика - 10").
2. Користувач випадково написав ще одне ":" (Наприклад: "Фізика: 12: Алгерба: 10").
3. Оцінка буде меньше за 0.
І вивести помилку користувачу.
*/
const input = ": "
const parts = input.split(": ");// вирізає зі строки ": " і перетворює в масив елементів
console.log(input.split(": "));
console.log(parts);
console.log(parts.length === 2); // як що є два елементи  то тру як що ні то фолс


// console.log(tabel);
function shouldExit() {
    return prompt("Ви дійсно хочете завершити? Натисніть OK ще раз для виходу.") === "";
}
function userInputLoop() {
    let subjectGrade; // Cancel отримуємо null
    const tabel = {}// це пустий табель
    
    while (true) {
        subjectGrade = prompt("Напишіть предмети і оцінки з табелю в такому форматі 'Математика: 10'");
        if (subjectGrade === null || (subjectGrade === "" && shouldExit())) break;
        if (!subjectGrade.includes(":")) throw new Error("Формат не відповідає. Немає ':'") //1.
        const subjectGradeArr =  subjectGrade.split(":")//розпилюю по :
        console.log(typeof subjectGradeArr[1] );
        console.log(Number(subjectGradeArr[1]));
        if (typeof subjectGradeArr[1] !== "number" && subjectGradeArr[1] < 0) throw new Error("Оцінка або не є числом або меньше за 0")
        tabel[subjectGradeArr[0]] = Number(subjectGradeArr[1]) 
    } 

    
    console.log(tabel);
    
   return "Цикл завершено.";
};
console.log(userInputLoop());
