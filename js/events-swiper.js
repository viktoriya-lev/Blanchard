(() => {
	let eventsSwiper = new Swiper(".js-events-swiper", {
		slidesPerView: 1,
		spaceBetween: 20,

		grid: {
			rows: 1,
			fill: "row"
		},

		navigation: {
			nextEl: ".js-events-next",
			prevEl: ".js-events-prev",
			disabledClass: "nav-btn--disabled"
		},

		pagination: {
			el: ".js-events-pagination",
		},

		breakpoints: {
			611: {
				slidesPerView: 2,
				spaceBetween: 34
			},

			971: {
				slidesPerView: 3,
				spaceBetween: 27
			},

			1281: {
				slidesPerView: 3,
				spaceBetween: 50
			}
		},

		a11y: false,
		keyboard: {
			enabled: true,
			onlyInViewport: true
		}, // можно управлять с клавиатуры стрелками влево/вправо

		// Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
		watchSlidesProgress: true,
		watchSlidesVisibility: true,
		slideVisibleClass: "slide-visible",

		on: {
			init: function () {
				this.slides.forEach((slide) => {
					const links = slide.querySelectorAll('a');
					const btns = slide.querySelectorAll('button');
					const interactive = [...links, ...btns];

					if (!slide.classList.contains("slide-visible")) {
						slide.tabIndex = "-1";
						interactive.forEach(el => {
							el.tabIndex = "-1";
						});
					} else {
						slide.removeAttribute('tabindex');
						interactive.forEach(el => {
							el.removeAttribute('tabindex');
						});
					}
				});
			},
			slideChange: function () {
				this.slides.forEach((slide) => {
					const links = slide.querySelectorAll('a');
					const btns = slide.querySelectorAll('button');
					const interactive = [...links, ...btns];

					if (!slide.classList.contains("slide-visible")) {
						slide.tabIndex = "-1";
						interactive.forEach(el => {
							el.tabIndex = "-1";
						});
					} else {
						slide.removeAttribute('tabindex');
						interactive.forEach(el => {
							el.removeAttribute('tabindex');
						});
					}
				});
			}
		}
	});
})();