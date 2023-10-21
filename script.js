let timerdisplay=document.querySelector(".timerDisplay")
let start=document.querySelector("#start_btn");
let stop=document.querySelector("#stop_btn");
let reset=document.querySelector("#reset_btn");

let msec=0;
let sec=0;
let min=0;

let timerid=null;
start.addEventListener("click",function(){
   
    if(timerid!==null){
        clearInterval(timerid)
    }
    timerid=setInterval(startTimer,100);
});

stop.addEventListener("click",function(){
   
    clearInterval(timerid);
});

reset.addEventListener("click",function(){
   
    clearInterval(timerid);
    timerdisplay.innerHTML='00 : 00 : 00';
    msec = sec = min =0;
});


function startTimer(){
    msec++;
    if(msec>=10){
        msec=0;
        sec++;
        if(sec==60){
            sec=0;
            min++;
        }
    
    }

    let msecString;
    if(msec<10){
        msecString=`0${msec}`
    }
    else{
        msecString=msec;
    }
let secString;
    if(sec<10){
        secString=`0${sec}`
    }
    else{
        secString=sec;
    }

    let minString;
    if(min<10){
        minString=`0${min}`
    }
    else{
        minString=min;
    }

    timerdisplay.innerHTML= `${minString} : ${secString} : ${msecString}`

}

