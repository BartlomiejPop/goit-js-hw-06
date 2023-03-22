const formEl = document.querySelector(".login-form");
const emailInputEl = formEl.elements[0];
const passwordInputEl = formEl.elements[1];
const btnEl = formEl.elements[2];

const checkForm = (event) => {
	if (emailInputEl.value === "" || passwordInputEl.value === "") {
		alert("Proszę uzupełnić wszystkie pola!");
	} else {
		const user = {
			email: emailInputEl.value,
			password: passwordInputEl.value,
		};
		console.log(user.email);
		console.log(user.password);
		formEl.reset();
	}
};

btnEl.addEventListener("click", (e) => {
	e.preventDefault();
	checkForm(e);
});
