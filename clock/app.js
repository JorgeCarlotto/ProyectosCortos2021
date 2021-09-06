const d = document;
const clock = "#clock";
const actClok = "#activate-clock";
const dactClok = "#deactivate-clock"
let clockTempo;

d.addEventListener("click",(e)=>{
    if(e.target.matches(actClok)){
        clockTempo = setInterval(()=>{
            let clockHour = new Date().toLocaleTimeString();
            d.querySelector(clock).innerHTML=`<h3>${clockHour}<h3>`
        },1000);
        e.target.disabled = true;
}
    if(e.target.matches(dactClok)){
        clearInterval(clockTempo);
        d.querySelector(clock).innerHTML = null;
        d.querySelector(actClok).disabled = false;
}
})    
//alarm
const actAlarm = "#activate-alarm"
const dactAlarm = "#deactivate-alarm"
const sound = "assets/alarma.mp3"

let alarmaTempo;
const $alarm = d.createElement("audio"); 
$alarm.src= sound; 

d.addEventListener("click",(e)=>{
    if(e.target.matches(actAlarm)){
        alarmaTempo = setTimeout(()=>{
            $alarm.play();
        },1000)

        e.target.disabled = true; 

    }
    if(e.target.matches(dactAlarm)){
        clearTimeout(alarmaTempo);
        $alarm.pause(); 
        $alarm.currentTime = 0;
        d.querySelector(actAlarm ).disabled = false; 

    }

})