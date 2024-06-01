const changePassword = async () => {
	const response = await fetch('http://localhost:8000/api/user/password', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('token'),
		},
		body: JSON.stringify({
			password: document.getElementById('oldPassword').value,
			new_password: document.getElementById('newPassword').value,
			new_password_confirmation:
				document.getElementById('repeatPassword').value,
		}),
	});
	if (!response.ok) {
		throw Error('Не удалось изменить пароль.');
	}

	const data = await response.json();

	if (!data.success) {
		alert(data.message);
        return;
	}

    window.location.href = 'lifeAkk.html'
};
