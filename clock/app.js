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


