daysLabel = document.getElementById('days-label');
hoursLabel = document.getElementById('hours-label');
minutesLabel = document.getElementById('minutes-label');
secondsLabel = document.getElementById('seconds-label');

target = new Date("25 December 2022").getTime();
christmas = false;

function countdown() {
	now = new Date().getTime();
	difference = target - now;
	if (difference > 0) {
		document.getElementById('days').innerHTML = days = Math.floor(difference / (1000 * 60 * 60 * 24));
		document.getElementById('hours').innerHTML = hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		document.getElementById('minutes').innerHTML = minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
		document.getElementById('seconds').innerHTML = seconds = Math.floor((difference % (1000 * 60)) / 1000);
	}
	else {
		christmas = true;
	}

	daysLabel.innerHTML = "days";
	hoursLabel.innerHTML = "hours";
	minutesLabel.innerHTML = "minutes";
	secondsLabel.innerHTML = "seconds";

	if (days == 1) {
		daysLabel.innerHTML = "day";
	}
	if (hours == 1) {
		hoursLabel.innerHTML = "hour";
	}
	if (minutes == 1) {
		minutesLabel.innerHTML = "minute";
	}
	if (seconds == 1) {
		secondsLabel.innerHTML = "second";
	}
}

countdown();
setInterval(countdown, 1000);