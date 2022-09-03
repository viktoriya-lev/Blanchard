(() => {
	// определение функции, которая отвеает за работу меню
	function setBurger(params) {
		const btn = document.querySelector(`.${params.btnClass}`);
		const menu = document.querySelector(`.${params.menuClass}`);
		const links = menu.querySelectorAll(`.${params.linksClass}`);

		function onBtnClick() {
			if (window.getWindowWidth() <= window.TABLET_WIDTH) {
				btn.classList.toggle(params.activeClass);

				if (
					!menu.classList.contains(params.activeClass) &&
					!menu.classList.contains(params.hiddenClass)
				) {
					menu.classList.add(params.activeClass);
					document.body.style.overflow = 'hidden';
					btn.setAttribute('aria-expanded', 'true');
					btn.setAttribute('aria-label', 'Закрыть меню навигации');
				} else {
					menu.classList.add(params.hiddenClass);
					document.body.removeAttribute('style');
					btn.setAttribute('aria-expanded', false);
					btn.setAttribute('aria-label', 'Открыть меню навигации');
				}
			}
		};

		btn.setAttribute('aria-expanded', false);

		menu.addEventListener("animationend", function () {
			if (this.classList.contains(params.hiddenClass)) {
				this.classList.remove(params.activeClass);
				this.classList.remove(params.hiddenClass);
			}
		});

		btn.addEventListener("click", window.debounce(onBtnClick, 500));
		links.forEach((link) => {
			link.addEventListener("click", window.debounce(onBtnClick, 500))
		});
	}

	// вызов функции и передача в нее классы элементов
	setBurger({
		btnClass: "js-burger", // класс бургера
		menuClass: "js-nav-wrap", // класс меню
		activeClass: "is-opened", // класс открытого состояния
		hiddenClass: "is-closed", // класс закрывающегося состояния (удаляется сразу после закрытия)
		linksClass: "js-nav-link"
	});
})();