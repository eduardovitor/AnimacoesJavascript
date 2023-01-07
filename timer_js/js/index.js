
const btn = document.querySelector("button");
btn.addEventListener("click",turnOn);

function startTimer() {
    var p = document.querySelector("p");
    var timer_value = parseInt(p.textContent);
    var interval_id = setInterval(timer,"1000");
    function timer() { // Fiz assim porque era preciso organizar a lógica em uma função e para acessar os valores acima
        timer_value--;
        if(timer_value < 0) {
            clearInterval(interval_id);
        }
        else {
            p.textContent = timer_value.toString();
        }
    }
}

