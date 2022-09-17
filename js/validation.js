(() => {
	const validation = new JustValidate('.contacts__form', {
		errorFieldCssClass: 'is-invalid',
	});

	validation
		.addField('.js-input-name', [
			{
				rule: 'minLength',
				value: 2,
				errorMessage: 'Имя слишком короткое',
			},
			{
				rule: 'maxLength',
				value: 20,
				errorMessage: 'Имя слишком длинное',
			},
			{
				rule: 'required',
				errorMessage: 'Введите имя',
			},
		])

		.addField('.js-input-tel', [
			{
				rule: 'required',
				errorMessage: 'Введите телефон',
			},
		])

	var selector = document.querySelector("input[type='tel']");

	var im = new Inputmask("+7 (999)-999-99-99");
	im.mask(selector);
})();