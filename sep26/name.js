document.getElementById("setbtn").addEventListener("click",dataset);
document.getElementById("getbtn").addEventListener("click",dataget);
document.getElementById("clrbtn").addEventListener("click",cleardataget);

function dataset(){
    let firstnm=document.getElementById("fnm").value;
    let lastnm=document.getElementById("lnm").value;
    window.localStorage.setItem("firstName",firstnm);
    window.localStorage.setItem("lastName",lastnm);
    alert("Your data is set in local storage ");
}

function dataget(){
    let mf=window.localStorage.getItem("firstName");
    let ml=window.localStorage.getItem("lastName");
    document.getElementById("ans").innerHTML="Hi i am "+mf+" "+ml;
}

function cleardataget(){
    window.localStorage.clear();
    alert("Local storage is clear")
}