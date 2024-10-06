const logForm = document.querySelector('.login-form')
logForm.addEventListener('submit', (event) => {
	event.preventDefault();
    const { email, password } = event.target.elements;
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
    

if (emailValue === '' || passwordValue === '') {
			alert ('Please fill in all the fields!');
			return;
		};
		const formData = {
			email: emailValue,
			password: passwordValue,
		};

		console.log(formData);

		logForm.reset();
	});