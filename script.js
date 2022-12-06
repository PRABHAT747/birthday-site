let name = "shivam"

let count = 0 ; 

let hhEl= document.getElementById("pp"); 
let cnt = document.getElementById("count"); 
let reset =document.getElementById("reset"); 
console.log(cnt)
console.log(pp)

function btn (){
    count++; 
   cnt.innerText=count; 
}
function rst(){
    count= 0 ; 
    cnt.innerText=0
}