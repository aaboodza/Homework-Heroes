//Test and Grade system
var answers = ["A", "C", "B"],
	tot = answers.length;

function getCheckedValue(radioName) {
	var radios = document.getElementsByName(radioName);
	for (var y = 0; y < radios.length; y++)
		if (radios[y].checked) return radios[y].value;
}

function dateAndTime() {
	outputObj = document.getElementByID("date");
	const d = getDate();
	dayMonth = d.getDate();
	var input = parseInt(prompt("What day of the month is your assignment due?: "));
	var newDay = dayMonth - input;
	outputObj.innerHTML= "Your assignment is due " + newDay + "days from now.";
}

function getScore() {
	var score = 0;
	for (var i = 0; i < tot; i++)
		if (getCheckedValue("question" + i) === answers[i]) score += 1;
	return score;
}

function returnScore() {
	document.getElementById("myresults").innerHTML =
		"Your grade is : " + (getScore() * 100 / tot).toFixed(0) + "%";
	if (getScore() > 2) {
		console.log("Bravo");
	}
}

// Accordion
function myFunction(id) {
	var x = document.getElementById(id);
	if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
		x.previousElementSibling.className += " w3-theme-d1";
	} else {
		x.className = x.className.replace("w3-show", "");
		x.previousElementSibling.className =
			x.previousElementSibling.className.replace(" w3-theme-d1", "");
	}
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
	var x = document.getElementById("navDemo");
	if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
	} else {
		x.className = x.className.replace(" w3-show", "");
	}
}
