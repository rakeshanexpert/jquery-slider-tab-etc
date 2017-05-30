function whatDate(day){
    if(day != undefined){
        var dayName;
        
        if(day == 1){
            dayName = "Sunday";
        } else if(day == 2) {
            dayName = "Monday";
        } else if(day == 3) {
            dayName = "Tuesday";
        } else if(day == 4) {
            dayName = "Wednesday";
        } else if(day == 5) {
            dayName = "Thursday";
        } else if(day == 6) {
            dayName = "Friday";
        } else if(day == 7) {
            dayName = "Saturday";
        } else {
            dayName = "Invalid entry!";
        }
        
        //console.log(dayName);
        return dayName;
    } else {
        alert("date not supplied!");
    }
}

whatDate(8)