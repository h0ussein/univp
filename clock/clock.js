
function UpdateClock(){


    const now = new Date();
    let hours = now.getHours(); 
    let AP = hours  >=12 ? "PM" : "AM";  
    hours %=12 || 12;
    hours = hours.toString().padStart(2,0);
    let minutes = now.getMinutes().toString().padStart(2, 0);
    let seconds = now.getSeconds().toString().padStart(2, 0);
    let timeString = `${hours}:${minutes}:${seconds} ${AP}`  ;

    document.getElementById("clock").textContent = timeString;



}

UpdateClock();
setInterval(UpdateClock,1000);