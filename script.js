window.addEventListener('load', calculateTime) //When page loads the function is called

function calculateTime() {
    var date = new Date();
    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    var dayNames= ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    
    hour = hour % 12;  // Converting military format to normal 12hr format
    hour = hour ? hour : '12';
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    seconds = seconds < 10 ? '0' + seconds : seconds

    document.getElementById("day").innerHTML = dayNames[dayNumber];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById("ampm").innerHTML = ampm;

    setTimeout(calculateTime, 200);

}

calculateTime();