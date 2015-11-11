$(document).ready(function () {
	var targetInput = $('#fio');
	var error = $('.error-message');
	var form = $('.form-data');

	// по keyup вызываем функцию разделяющая данные
	targetInput.keyup(checkString);

	function checkString () {
		// полчучаем значение поля
		var targetString = targetInput.val();

		// Убираем лишние пробелы
		targetString = targetString.replace(/(^\s*)|(\s*)$/g, '').replace(/\s+/g, ' ');

		// Проверяем на валидность введенную строку
		var validation = validateString(targetString);
		if (validation) {
			// Если строка валидная то проверяем на количество введенных слов
			var wordCount = targetString.split(" ");
			if (wordCount.length == 3) {
				error.hide();
				fillFormData(targetString);
				form.slideDown('slow');
			}
			else if(wordCount.length < 3) {
				form.hide();
				error.hide();
			}
			else {
				form.hide();
				error.show();
			}
		}
		else {
			error.show();
			form.hide();
		}
	}

	function validateString (string) {
		if (/^[a-zA-Zа-яёА-ЯЁ\s\-]+$/.test(string)) {
			return true;
		}
		else {
			return false;
		}
	}

	function fillFormData(targetString) {

		// дробим на три части и подставляем в нужные нам места
		var info = targetString.split(" ");
		
		$('.last-name').text(info[0]);
		$('.first-name').text(info[1]);
		$('.patronymic').text(info[2]);
	}

	$('#summit-button').click(function() {
		$(".pop-up").show();
		$('html').css('overflow', 'hidden');
	});

	$('.close-button').click(function() {
		$(".pop-up").hide();
		$('html').css('overflow', '');
	});

});