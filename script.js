document
	.getElementById("check-btn")
	.addEventListener("click", validatePhoneNumber);
document.getElementById("clear-btn").addEventListener("click", clearResults);

function validatePhoneNumber() {
	const userInput = document.getElementById("user-input").value.trim();

	if (userInput === "") {
		alert("Please provide a phone number");
		return;
	}

	const isValid = validatePhoneNumberFormat(userInput);

	const resultsDiv = document.getElementById("results-div");
	resultsDiv.textContent = isValid
		? `Valid US number: ${userInput}`
		: `Invalid US number: ${userInput}`;
}

function clearResults() {
	document.getElementById("results-div").textContent = "";
}

function validatePhoneNumberFormat(phoneNumber) {
	const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
	return regex.test(phoneNumber);
}
