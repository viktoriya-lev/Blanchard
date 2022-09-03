(() => {
	new Accordion('.js-accordion-container', {
		openOnInit: [0],

		elementClass: 'accordion__item',
		triggerClass: 'accordion__trigger',
		panelClass: 'accordion__panel'
	});
})();