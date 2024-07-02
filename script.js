//your JS code here. If required.
const form = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const rememberMeCheckbox = document.querySelector("#checkbox");
const existingButton = document.querySelector("#existing");
existingButton.style.display = "none";

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const username = usernameInput.value;
	const password = passwordInput.value;
	const rememberMe = rememberMeCheckbox.checked; // true or false
	if(rememberMe) {
		localStorage.setItem("username", username)
		localStorage.setItem("password", password)
	} else {
		localStorage.removeItem("username", username)
		localStorage.removeItem("password", password)
	}
	alert(`Logged in as ${username}.`);
	showButton();
	form.reset();
})

function showButton() {
	const username = localStorage.getItem("username")
	const password = localStorage.getItem("password")
	if(username && password) {
		existingButton.style.display = "block";
	} else {
		existingButton.style.display = "none";
	}
}
function loginAsSaved() {
	const username = localStorage.getItem("username")
	const password = localStorage.getItem("password")
	if(username && password) {
		alert(`Logged in as ${username}.`);
	}
}
showButton();

existingButton.addEventListener('click', loginAsSaved)
