document.addEventListener('DOMContentLoaded', () => {
	const loader = document.getElementById('loader');
	const itemsContainer = document.getElementById('items');

	const xhr = new XMLHttpRequest();
	xhr.open(
		'GET',
		'https://students.netoservices.ru/nestjs-backend/slow-get-courses',
		true
	);

	xhr.onload = function () {
		if (xhr.status === 200) {
			loader.classList.remove('loader_active');
			const data = JSON.parse(xhr.responseText);

			const valutes = data.response.Valute;
			for (let key in valutes) {
				const valute = valutes[key];

				const item = document.createElement('div');
				item.classList.add('item');

				item.innerHTML = `
									<div class="item__code">${valute.CharCode}</div>
									<div class="item__value">${valute.Value}</div>
									<div class="item__currency">руб.</div>
							`;

				itemsContainer.appendChild(item);
			}
		} else {
			console.error('Ошибка загрузки данных:', xhr.statusText);
			loader.classList.remove('loader_active');
		}
	};

	xhr.onerror = function () {
		console.error('Ошибка запроса');
		loader.classList.remove('loader_active');
	};

	xhr.send();
});

//
