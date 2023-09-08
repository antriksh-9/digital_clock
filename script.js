let hourHand = document.querySelector(".hours");
let minHand = document.querySelector(".minutes");
let secHand = document.querySelector(".seconds");
let session = document.querySelector(".session");

let ticking = ()=>{
    let currDate = new Date();
    hourHand.textContent = currDate.getHours();
    if(hourHand.textContent >= 12){
        session.textContent = "PM"
    }
    if(hourHand.textContent > 12){
        hourHand.textContent -=12;
    }
    if(hourHand.textContent<10){
        hourHand.textContent = "0"+hourHand.textContent;
    }
    minHand.textContent = currDate.getMinutes();
    if(minHand.textContent<10){
        minHand.textContent = "0"+minHand.textContent;
    }
    secHand.textContent = currDate.getSeconds();
    if(secHand.textContent<10){
        secHand.textContent = "0"+secHand.textContent;
    }
}
setInterval(ticking,1000);