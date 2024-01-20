const hrs=document.getElementById("hours");
const mins=document.getElementById("minutes");
const sec=document.getElementById("seconds");
const amp=document.getElementById("timelimit");

function newClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let am="AM";

    if(h>12){
        h=h-12
        am="PM"
    }
    hrs.innerText=h;
    mins.innerText=m;
    sec.innerText=s;
    amp.innerText=am;
    setTimeout(()=>{
newClock()
    },1000)
}
newClock()