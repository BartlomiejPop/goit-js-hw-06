const controlsEl = document.getElementById("controls");
const inputEl = controlsEl.children[0];
const createBtn = controlsEl.children[1];
const destroyBtn = controlsEl.children[2];
const boxesEl = document.getElementById("boxes");
let box;

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const createBoxes = (amount) => {
	for (let i = 0; i < amount; i++) {
		box = document.createElement("div");
		box.style.backgroundColor = getRandomHexColor();
		box.style.width = 30 + i * 10 + "px";
		box.style.height = 30 + i * 10 + "px";
		box.style.margin = "10px";
		boxesEl.insertAdjacentElement("beforeend", box);
	}
};

const destroyBoxes = () => {
	boxesEl.innerHTML = "";
};

createBtn.addEventListener("click", (e) => {
	e.preventDefault();
	createBoxes(inputEl.value);
});

destroyBtn.addEventListener("click", (e) => {
	e.preventDefault();
	destroyBoxes();
});
