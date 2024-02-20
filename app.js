let clockDigits = document.getElementById('digits');

function myTime(){
    let date = new Date;
    let currentTime = date.toLocaleTimeString();
    console.log(currentTime)
    
    clockDigits.innerHTML = currentTime;
}

setInterval(myTime,1000);