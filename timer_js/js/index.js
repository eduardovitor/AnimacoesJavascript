
const btn = document.querySelector("button");
btn.addEventListener("click",turnOn);

function startTimer() {
    var p = document.querySelector("p");
    var timer_value = parseInt(p.textContent);
    while(timer_value!=0){
        setTimeout(function(){
           timer_value--;
           p.textContent = timer_value.toString(); 
        }, 100);
    }
}

