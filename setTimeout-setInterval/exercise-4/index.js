/*
Напишіть код, який працює так: при натисканні на кнопку з id="start-countdown"
 запускається зворотний відлік від 10 до 1 всередині елемента з id="countdown-time". При досягненні 0
 нуль не з'являється, а з'являється напис "Finish".
*/
const countdownTime = document.getElementById('countdown-time')
const startCountdown = document.getElementById('start-countdown')
startCountdown.addEventListener('click', function(event){
        let count = 10
        const setIntervalId = setInterval(()=> {

            countdownTime.textContent = count;
            count -= 1
            if (count < 1) {

                setTimeout(() => countdownTime.textContent = "Finish", 1000);
                clearInterval(setIntervalId)
            }
        },1000)
})