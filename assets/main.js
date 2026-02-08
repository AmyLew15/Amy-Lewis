const setScrolled = () => {
	document.body.classList.toggle("is-scrolled", window.scrollY > 12);
};

window.addEventListener("scroll", setScrolled, { passive: true });
setScrolled();