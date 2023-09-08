let hourHand = document.querySelector(".hours");
let minHand = document.querySelector(".minutes");
let secHand = document.querySelector(".seconds");
let session = document.querySelector(".session");
let date = document.querySelector(".date");
let day = document.querySelector(".day");

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
    let dayArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    for(let i=0; i<7; i++){
        if(day.textContent==i){
            day.textContent = dayArr[i];
        }
    }
    let month = currDate.getMonth();
    let MonthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    for(let i=0; i<12; i++){
        if(month==i){
            month = MonthArr[i];
        }
    }
    let dateSuff = currDate.getDate();
    if(dateSuff==1 || dateSuff==31 || dateSuff==21){
        dateSuff+="st";
    }
    else if(dateSuff==2 || dateSuff==22){
        dateSuff+="nd";
    }
    else if(dateSuff==3 || dateSuff==23){
        dateSuff+="rd";
    }
    else{
        dateSuff+="th";
    }
    date.textContent = dateSuff + " " + month + " " + currDate.getFullYear();
}
setInterval(ticking,1000);