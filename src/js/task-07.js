const fontSizeControlEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");
let counter = 0;
const changeFontSize = () => {
	textEl.style.fontSize = fontSizeControlEl.value + "px";
	console.log(textEl.style.fontSize);
};

fontSizeControlEl.addEventListener("input", changeFontSize);
