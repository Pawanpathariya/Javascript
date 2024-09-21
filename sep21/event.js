/* q1
document.getElementById("btn1").addEventListener("click",display);

function display(){
    alert("Welcome to Cybrom");add
}*/


document.getElementById("btn1").addEventListener("click", cal);

function cal(){
    let phy=Number(document.getElementById("phy").value);
    let che=Number(document.getElementById("che").value);
    let math=Number(document.getElementById("math").value);
    let eng=Number(document.getElementById("eng").value);
    let hin=Number(document.getElementById("hin").value);
   
    let total=phy+che+math+eng+hin;
    let per=total/5;

    document.getElementById("ans1").innerHTML="Total marks "+total;
    document.getElementById("ans2").innerHTML="Percantage "+per+"%";
}