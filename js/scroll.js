(() => {
	function scrollToContent(link, isMobile) {
		if (isMobile && window.getWindowWidth() > window.MOBILE_WIDTH) {
			return;
		}

		const href = link.getAttribute('href').substring(1);

		if (Boolean(href)) {
			const scrollTarget = document.getElementById(href);
			const elementPosition = scrollTarget.getBoundingClientRect().top;

			window.scrollBy({
				top: elementPosition,
				behavior: 'smooth'
			});
		}
	}

	document.querySelectorAll('.js-scroll-link').forEach(link => {
		link.addEventListener('click', function (e) {
			e.preventDefault();

			scrollToContent(this, false);
		});
	});
})();