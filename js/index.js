// Navbar //
document.addEventListener('scroll', () => {
	const navBar = document.querySelector('.navbar');
	const hiddenImages = document.querySelectorAll('.start-business img.opacity-0');

	if (window.scrollY > 0) {
		// Mark navbar
		navBar.classList.add('scrolled');
		// show hidden images
		hiddenImages.forEach((image) => {
			image.classList.remove('opacity-0');
		});
	}

	// Remove scrolled class so if user scrolls back again, same animation happens
	if (window.scrollY == 0) {
		navBar.classList.remove('scrolled');
	}
});
// End of Navbar //

// questions //
const questions = document.querySelectorAll('.questions .question');
questions.forEach((question) => {
	question.addEventListener('click', () => {
		const expander = question.querySelector('.expander');
		const rotatedSpan = expander.querySelector('.rotated');
		const answer = expander.parentElement.parentElement.querySelector('.content');

		if (expander.classList.contains('expanded')) {
			expander.classList.remove('expanded');
			rotatedSpan.style.transform = 'rotate(90deg)';

			// Get content of the question and display it
			answer.classList.add('d-none');
		} else {
			expander.classList.add('expanded');
			rotatedSpan.style.transform = 'rotate(0deg)';

			// Get content of the question and hide it
			answer.classList.remove('d-none');
		}
	});
});

// All sections
const sections = document.querySelectorAll('.section-hidden-at-start');

const observer = new IntersectionObserver(
	(entries) =>
		entries.forEach(({ isIntersecting, target }) => {
			if (isIntersecting) {
				target.classList.add('visible');
			}
		}),
	{ threshold: 0.2 }
);

sections.forEach((section) => observer.observe(section));
