document.getElementById("btn1").addEventListener("click",dataSave);


let api="http://localhost:3000/students";
async function dataSave(){
    let Table=`<table width="90%" border="1" bgcolor="yellow">
    <td> Slug </td>
    <td> Url </td>
    <td> title </td>
    <td> status </td>
    <td> image </td>
    `
   let api='https://jsonplaceholder.org/posts';
   let data=await fetch(api);
   let mydata=await data.json();

   mydata.map((key)=>{
    Table+=`<tr>
              <td>${key.slug} </td>
              <td>${key.url} </td> 
              <td>${key.title} </td>
              <td>${key.status} </td>
              <td>
              <img src=" ${key.image}" width="100",height="100">
             
              </td>
          </tr>
          `
   Table+='</table';

   document.getElementById("demo").innerHTML=Table;
})
}
