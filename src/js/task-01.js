const allItems = document.querySelectorAll(".item");
const categoryNames = document.querySelectorAll("h2");

const numberOfItems = (item) => {
	let itemsCounter = 0;
	allItems.forEach((el) => {
		itemsCounter++;
	});
	console.log(`Number of categories:  ${itemsCounter}`);
};

const categoryInfo = (item) => {
	categoryNames.forEach((el) => {
		console.log(`Category: ${el.textContent} `);
		console.log(`Elements:  ${el.nextElementSibling.children.length}`);
	});
};

numberOfItems();
categoryInfo();
