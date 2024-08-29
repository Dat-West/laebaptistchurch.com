const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		} else {
			entry.target.classList.remove('show');
		}
	});
});

const hiddenElements = document.querySelectorAll('.introduct');
hiddenElements.forEach((el) => observer.observe(el));





const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
	if (window.pageYOffset > 0) {
		toTop.classList.add('active');
	}
	else {
		toTop.classList.remove('active');
	}
})