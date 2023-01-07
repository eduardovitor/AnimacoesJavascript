

function myAnimation() {
    var img_ref = 1;
    var bear_img = document.getElementById("bear_img");
    var interval_id = setInterval(changeImg,"200");
    var pos = 2;
    function changeImg() {
        if (pos == 450) {
            clearInterval(interval_id);
        }
        else {
            if(img_ref == 1) {
                pos+=2;
                bear_img.style.left = pos + "px";
                bear_img.src="./images/chara-2.png";
                img_ref = 2;
            }
            else if(img_ref == 2) {
                pos+=2;
                bear_img.style.left = pos + "px";
                bear_img.src="./images/chara-3.png";
                img_ref = 3;
            }
            else if (img_ref == 3) {
                bear_img.src="./images/chara-1.png";
                img_ref = 1;
            }
        }
    }
}
