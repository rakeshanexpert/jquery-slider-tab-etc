function whatDate(day) {
	if (day != undefined) {
		var dayName;

		switch (day) {
			case 1:
				dayName = "Sunday";
				break;
			case 2:
				dayName = "Monday";
				break;
			case 3:
				dayName = "Tuesday";
				break;
			case 4:
				dayName = "Wednesday";
				break;
			case 5:
				dayName = "Thursday";
				break;
			case 6:
				dayName = "Friday";
				break;
			case 7:
				dayName = "Saturday";
				break;
			default:
				dayName = "invalid entry!";
		}
		
		//console.log(dayName);
		return dayName;
	} else {
		alert("date not supplied!");
	}
}

whatDate(4);


// loop
for(initiator; condition; increment/decrement){
    console.log("hello jee");
}

for(var i=10; i >= 0; i--){
    console.log("rakesh jee : " + i);
}
