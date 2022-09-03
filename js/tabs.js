(() => {
	function setTabs(dataPath, dataTarget) {
		const btns = document.querySelectorAll(`.js-tab-btn[${dataPath}]`);
		const contents = document.querySelectorAll(`.js-tab-content[${dataTarget}]`);

		btns.forEach((btn) => {
			btn.addEventListener('click', function (evt) {
				evt.preventDefault();
				const path = this.getAttribute(dataPath);
				console.log(path);
				const target = document.querySelector(`.js-tab-content[${dataTarget}="${path}"]`);


				btns.forEach((currentBtn) => {
					currentBtn.classList.remove('tab-active');
				});

				this.classList.add('tab-active');

				contents.forEach((content) => {
					content.classList.remove('tab-active');
				});

				target.classList.add('tab-active');
			});
		});
	}

	window.setTabs = setTabs;
})();