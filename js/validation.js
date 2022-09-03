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
				rule: 'number',
				errorMessage: 'Недопустимый формат',
			},
			{
				rule: 'required',
				errorMessage: 'Введите телефон',
			},
		])
})();