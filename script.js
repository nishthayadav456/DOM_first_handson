let a=document.getElementById("text")
console.log(a);

let b=document.getElementsByTagName("h1")
console.log(b)

let c=document.getElementsByClassName("box")
console.log(c)

 let q4 = document.getElementById("box4")
  q4.addEventListener("click",()=>{
      q4.innerHTML="hello world"
  })




 let e = document.getElementById("P")

 function rtxt(){
      e.innerHTML = "Welcome To Elevation academy";
    
}
let changetext=document.getElementsByClassName("heading")
changetext[0].addEventListener("click",()=>{
    
    changetext[0].style.color="red"
})

let parent = document.querySelector(".parent");
let count=true;
function changeDirection(){
    if(count){
        parent.style.display="block"
        count=false;
    }
    else{
        parent.style.display="flex"
        count=true;
    }
}
let dis=document.querySelectorAll("h2")
dis[0].addEventListener("click",()=>{
    function StartClock(){
 let time=new Date();
 let hrs= time.getHours();
 let mins=time.getMinutes();
 let secs=time.getSeconds();
 let AMPM="PM"

 if(hrs <12){
    hrs+=12;
    AMPM= "AM"
 }
 console.log(`Time :${hrs}:${mins}:${secs}`);
 dis[0].innerHTML=`${hrs}:${mins}:${secs}${AMPM}`
}
setInterval(()=>{
    StartClock();
},1000)
})
