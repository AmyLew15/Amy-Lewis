const setScrolled = () => {
	const isDesktop = window.matchMedia("(min-width: 721px)").matches;
	document.body.classList.toggle("is-scrolled", isDesktop && window.scrollY > 12);
};

window.addEventListener("scroll", setScrolled, { passive: true });
window.addEventListener("resize", setScrolled);
setScrolled();

const emailButton = document.getElementById("copy-email");

emailButton.addEventListener("click", (event) => {
	event.preventDefault();

	navigator.clipboard.writeText("ae.lewis15@gmail.com");

	emailButton.textContent = "Copied!";
	emailButton.classList.add("copied");

	setTimeout(() => {
		emailButton.textContent = "Email";
		emailButton.classList.remove("copied");
	}, 2000);
});