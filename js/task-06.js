const inputEl = document.getElementById("validation-input");

const checkInput = () => {
	if (inputEl.value.length === 6) {
		inputEl.classList.remove("invalid");
		inputEl.classList.add("valid");
	} else {
		inputEl.classList.remove("valid");
		inputEl.classList.add("invalid");
	}
};

inputEl.addEventListener("blur", checkInput);
