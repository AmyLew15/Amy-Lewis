const setScrolled = () => {
	const isDesktop = window.matchMedia("(min-width: 721px)").matches;
	document.body.classList.toggle("is-scrolled", isDesktop && window.scrollY > 12);
};

window.addEventListener("scroll", setScrolled, { passive: true });
window.addEventListener("resize", setScrolled);
setScrolled();