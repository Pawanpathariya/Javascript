document.getElementById("btn1").addEventListener("click",dataSave);
document.getElementById("btn2").addEventListener("click",dataDisplay);


let api="http://localhost:3000/students";
function dataSave(){
    let roll=document.getElementById("rno").value;
    let name=document.getElementById("nm").value;
    let city=document.getElementById("ct").value;
    let fees=document.getElementById("fs").value;
    fetch(api,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "rollno":roll,
            "name":name,
            "city":city,
            "fees":fees,
        })
    }).then((res)=>{alert("Data save!");
    });
}
async function dataDisplay() {
    let Myobj="";
    const obj=await fetch(api);
    const data=await obj.json();


    data.map((key)=>{
        Myobj+=`<h1>Rollno ${key.rollno} <\h1>
                <h2>name ${key.name} <\h2>
                <h2>city ${key.city} <\h2> `
    })

    document.getElementById("demo").innerHTML= Myobj;
}