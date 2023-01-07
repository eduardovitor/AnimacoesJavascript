
const btn = document.querySelector("button");
btn.addEventListener("click",turnOn);
var state = false;
function turnOn() {
    let img_el = document.querySelector("img");
    if(state==false){
        img_el.src="./images/lampada-on.jpg";
        state=true;
    }
    else {
        img_el.src="./images/lampada.jpg";
        state=false;
    }
}

