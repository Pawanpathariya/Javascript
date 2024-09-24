document.getElementById("btn1").addEventListener("click",mystart);
document.getElementById("btn2").addEventListener("click",mystop);
document.getElementById("btn3").addEventListener("click",mycl);


let my;


function mycount(){
let val=(document.getElementById("head").innerHTML);
val++;
document.getElementById("head").innerHTML=val;
}

function mystart(){
my=setInterval(mycount,10);
}
function mystop(){
clearInterval(my);
}
function mycl(){
    document.getElementById("head").innerHTML=0;
}