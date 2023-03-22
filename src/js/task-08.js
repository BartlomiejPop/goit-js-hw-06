const formEl = document.querySelector(".login-form");
const emailInputEl = formEl.elements[0];
const passwordInputEl = formEl.elements[1];
const btnEl = formEl.elements[2];

const checkForm = (event) => {
	if (emailInputEl.value === "" || passwordInputEl.value === "") {
		alert("Proszę uzupełnić wszystkie pola!");
	} else {
		const email = emailInputEl.value;
		const password = passwordInputEl.value;
	}
};

btnEl.addEventListener("submit", (e) => {
	e.preventDefault();
	checkForm(e);
});
