//Test and Grade system
var answers = ["A", "C", "B"],
	tot = answers.length;

function getCheckedValue(radioName) {
	var radios = document.getElementsByName(radioName);
	for (var y = 0; y < radios.length; y++)
		if (radios[y].checked) return radios[y].value;
}

// Calendar function
function dateAndTime() {
	outputObj = document.getElementById("date");
	outputObj2 = document.getElementById("taskTitle");
	var input2 = prompt("Task title?");
	var input = parseInt(prompt("What day of the month is your assignment due? (input as number) "));
    	const d = new Date();
    	var dayMonth = d.getDate();
    	const newDay = (input - dayMonth);
	outputObj.innerHTML= newDay + " day(s)";
	outputObj2.innerHTML= "Task : " + input2;
}

function getScore() {
	var score = 0;
	for (var i = 0; i < tot; i++)
		if (getCheckedValue("question" + i) === answers[i]) score += 1;
	return score;
}

function returnScore() {
	document.getElementById("score1").innerHTML =
		"Your grade is : " + (getScore() * 100 / tot).toFixed(0) + "%";
	if (getScore() > 2) {
		console.log("Bravo");
	}
}


//Convert grade book to PDF
function convertToPDF() {
	var report = document.getElementById('transcript').innerHTML;
	var win = window.open('', '', 'height=700,width=700');
	win.document.write('<title>Grade Report</title>');   
	win.document.write(report);         

	win.document.close(); 	
	win.print();    
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

//Edit name
function editName() {
	outputObj1 = document.getElementById("name1");
	outputObj2 = document.getElementById("name2");
	var input1 = prompt("Please Enter your full name : ");
	var input2 = prompt("And where do you study?");
	outputObj1.innerHTML= '<i class="fa fa-user fa-fw w3-margin-right w3-text-theme"></i>' + "Name : " + input1;
	outputObj2.innerHTML= '<i class="fa fa-graduation-cap fa-fw w3-margin-right w3-text-theme"></i>' + "University : " + input2;

}

//Progress bars
function htmlBar() {
    document.getElementById("htmlBartext").style.width="50%"; 
	outputObj = document.getElementById("htmlBartext");
	outputObj.innerHTML= "50%";
}

function cssBar() {
    document.getElementById("cssBartext").style.width="50%"; 
	outputObj = document.getElementById("cssBartext");
	outputObj.innerHTML= "50%";
}

function barComp() {
    document.getElementById("htmlBartext").style.width="100%"; 
	outputObj = document.getElementById("htmlBartext");
	outputObj.innerHTML= "100%";

	document.getElementById("cssBartext").style.width="100%"; 
	outputObj2 = document.getElementById("cssBartext");
	outputObj2.innerHTML= "100%";

	document.getElementById("jsBartext").style.width="100%"; 
	outputObj3 = document.getElementById("jsBartext");
	outputObj3.innerHTML= "100%";
}
