const images = [
	{
		url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat",
	},
	{
		url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
	},
	{
		url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Group of Horses Running",
	},
];

const galleryEl = document.querySelector(".gallery");

images.forEach((el) => {
	galleryEl.insertAdjacentHTML(
		"afterbegin",
		`<li ><img class="image" src=${el.url} alt=${el.alt}/></li>`
	);
});

const imageEl = document.querySelectorAll(".image");
const liEl = document.querySelectorAll("li");
imageEl.forEach((el) => {
	el.style.width = "400px";
	el.style.margin = "20px";
  el.style.boxShadow = "0 0 40px #000";
});

liEl.forEach((el) => {
	el.style.justifyContent = "center";
	el.style.listStyle = "none";
	el.style.display = "flex";
	el.style.flexWrap = "wrap";
});

document.body.style.backgroundColor = "#f9f9ef";
