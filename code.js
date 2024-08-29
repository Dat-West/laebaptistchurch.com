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


const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	
	burger.addEventListener('click', () => {
		/*toggle nav*/
		nav.classList.toggle('nav-active');
	
		/*animate links*/
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = 'navLinkFade 2.5s ease forwards';
			}
	 		});
		/*burger animation*/
		burger.classList.toggle('toggle');

		});
	}
 
navSlide();


const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
	if (window.pageYOffset > 2000) {
		toTop.classList.add('active');
	}
	else {
		toTop.classList.remove('active');
	}
})