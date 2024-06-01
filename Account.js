window.onload = () => {
	AccountData();
};
async function AccountData() {
	const response = await fetch('http://localhost:8000/api/user', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('token'),
		},
	});

	const data = await response.json();
	(document.getElementById('name').value = data.name),
		(document.getElementById('lastName').value = data.surname),
		(document.getElementById('phone').value = data.phone_number);
	if (!data.success) {
		return;
	} else {
		window.location.href = 'index.html';
	}
	localStorage.setItem('token', data.token);
}

function addPhoto() {
	// Создаем новый элемент input type="file"
	const input = document.createElement('input');
	input.type = 'file';
	input.accept = 'image/*';

	// Добавляем обработчик события change к элементу input
	input.addEventListener('change', function () {
		// Получаем выбранный файл
		const file = input.files[0];
		// Читаем файл как base64 строку
		const reader = new FileReader();
		reader.onload = function () {
			// Устанавливаем base64 строку в качестве фона элемента profile-picture
			document.querySelector(
				'.profile-picture'
			).style.backgroundImage = `url(${reader.result})`;
			// Remove the "+" sign after adding a photo
			const plusSign = document.querySelector('.profile-picture .plus');
			if (plusSign) {
				plusSign.remove();
			}
		};
		reader.readAsDataURL(file);
	});
	// Имитируем клик по элементу input
	input.click();
}
