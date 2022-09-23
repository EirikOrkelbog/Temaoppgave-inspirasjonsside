const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".mobile__nav-toggle");

navToggle.addEventListener("click", () => {
	const visibility = nav.getAttribute("data-visible");

	if (visibility === "false") {
		nav.setAttribute("data-visible", "true");
		navToggle.setAttribute("aria-expanded", "true");
	} else {
		nav.setAttribute("data-visible", "false");
		navToggle.setAttribute("aria-expanded", "false");
	}

});

const sites = document.querySelector(".sites");


sites.addEventListener("click", () => {
	const visibility = sites.getAttribute("data-visible");

	if (visibility === "false") {
		nav.setAttribute("data-visible", "true");
		navToggle.setAttribute("aria-expanded", "true");
	} else {
		nav.setAttribute("data-visible", "false");
		navToggle.setAttribute("aria-expanded", "false");
	}
});



const about = document.querySelector(".about");


about.addEventListener("click", () => {
	const visibility = about.getAttribute("data-visible");

	if (visibility === "false") {
		nav.setAttribute("data-visible", "true");
		navToggle.setAttribute("aria-expanded", "true");
	} else {
		nav.setAttribute("data-visible", "false");
		navToggle.setAttribute("aria-expanded", "false");
	}
});


const contact = document.querySelector(".contact");


contact.addEventListener("click", () => {
	const visibility = contact.getAttribute("data-visible");

	if (visibility === "false") {
		nav.setAttribute("data-visible", "true");
		navToggle.setAttribute("aria-expanded", "true");
	} else {
		nav.setAttribute("data-visible", "false");
		navToggle.setAttribute("aria-expanded", "false");
	}
});