"use strict"

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);
		formData.append('image', formImage.files[0]);

		if (error === 0) {
			form.classList.add('sending');
			/*
			let response = await fetch('sendmail.php',{
				method: 'POST',
				body: formData
			});
			if (response.ok){
				let result = await response.json();
				alert(result.message);
				formPreview.innerHTML='';
				form.reset();
				form.classList.remove('sending');
			}else{
				alert("Ошибка");
				form.classList.remove('sending');
			}
			*/
		} else {
			alert('Заполните обязателные поля');
		}

	}


	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('.req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input);
				error++;
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('error');
		input.classList.add('error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('error');
		input.classList.remove('error');
	}
	//функция места email
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)+@\w+([\.-]?\w+)*(\.\w{2.8})+$/.test(input.value);
	}

	//получение инпут file переменную
	const formImage = document.getElementById('formImage');
	//получение вид для превью в переменную
	const formPreview = document.getElementById('formPreview');

	//Слушаем изминения в инпуте file
	formImage.addEventListener('change', () => {
		uploadingFile(formImage.files[0]);
	});

	function uploadingFile(file) {
		//проверяем мип файла
		if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
			alert('Разрешены толко изображенияю');
			formImage.value = '';
			return;
		}
		//проверим размер файла(<2 мб>)
		if (file.size > 2 * 1024 * 1024) {
			alert('Файл должен быт не менее 2 МБ.');
			return;
		}

		var reader = new FileReader();
		reader.onload = function (e) {
			formPreview.innerHTML = `<img src"${e.target.result}" alt="Фото">`;
		};
		reader.onerror = function (e) {
			alert('Ошибка');
		};
		reader.readAsDataURL(file);
	}
});