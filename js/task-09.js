function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const currentColor = document.querySelector(".color");
const colorBtn = document.querySelector(".change-color");

colorBtn.addEventListener("click", (e) => {
  document.body.style.backgroundColor = getRandomHexColor();
  currentColor.textContent = document.body.style.backgroundColor;
});
