const ingredientsEl = document.getElementById("ingredients");

const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

ingredients.forEach((el) => {
	const listItem = document.createElement("li");
	listItem.textContent = el;
	listItem.classList.add("item");
	ingredientsEl.append(listItem);
});
