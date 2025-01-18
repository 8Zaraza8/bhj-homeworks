const revealElements = document.querySelectorAll('.reveal');

function isElementInViewport(el) {
	const rect = el.getBoundingClientRect();
	return (
			rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
			rect.bottom > 0
	);
}

window.addEventListener('scroll', () => {
	revealElements.forEach(revealElements => {
		if (isElementInViewport(revealElements)) {
			revealElements.classList.add('reveal_active');
		} else {
			revealElements.classList.remove('reveal_active');
		}
	})
})
