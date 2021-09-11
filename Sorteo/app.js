const d = document
btn = "#winner-btn"
selector = ".color";

    const getWinner = (selector)=>{
        const $colors = d.querySelectorAll(selector);
        const ramdom = Math.floor(Math.random()*$colors.length);
        const winner = $colors[ramdom];
    
        return `El ganador es : ${winner.textContent}`;
    
    }

    d.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
            let result = getWinner(selector);
            alert(result);
            console.log(result);
        }
    });
