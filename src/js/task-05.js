const nameInputEl = document.getElementById("name-input");
const nameOutputEl = document.getElementById("name-output");

const showText = () => {
	if (nameInputEl.value === "") {
		nameOutputEl.textContent = "Anonymous";
	} else {
		nameOutputEl.textContent = nameInputEl.value;
	}
};

nameInputEl.addEventListener("keyup", showText);
