document.getElementById("cal").addEventListener("click",display)


function display(){
    let weight=Number(document.getElementById("weight").value);
    let Heigh=Number(document.getElementById("height").value);

    let BMI=weight/((Heigh/100)*(Heigh/100));
    let YourBMI=BMI.toFixed(2);
    document.getElementById('ans').innerHTML="Your BMI is :"+YourBMI+"Kg/m2";

    if(YourBMI>18.5 && YourBMI<24.9){
        document.getElementById('ans1').innerHTML="Your Condition : Good for Health";

    }
    else{
        document.getElementById('ans1').innerHTML="Your Condition : Bad for Your Health";

    }

}