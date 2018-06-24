function validateWeight() {
	var type = document.getElementById("mailType").value;
	var weight = document.getElementById("weight").value;
	var errorMessage = "";

	if (type == "Letters (Stamped)" && weight > 3.5) {
		errorMessage = "Please enter a weight that is 3.5 or less.";
	} else if (type == "Letters (Metered)" && weight > 3.5) {
		errorMessage = "Please enter a weight that is 3.5 or less. If it is heavier than 3.5, please choose \"Large Envelopes\"";
	} else if (type == "Large Envelopes (Flats)" && weight > 13) {
		errorMessage = "Please enter a weight that is 13 or less.";
	} else if (type == "First-Class Package Service—Retail" && weight > 13) {
		errorMessage = "Please enter a weight that is 13 or less.";
	}

	document.getElementById("errorMsg").innerHTML = errorMessage;
}

