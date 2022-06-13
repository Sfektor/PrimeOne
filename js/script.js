// ------------------------- js код на меню бургер 
document.addEventListener('DOMContentLoaded', () => { // Структура страницы загружена и готова к взаимодействию

	const button = document.querySelector('.menu__icon') // находим кнопку для открытия/закрытия окна навигации
	const nav = document.querySelector('.header-menu') // находим окно навигации

	button.addEventListener('click', () => { // при клике на кнопку
		nav.classList.toggle('active') // открываем/закрываем окно навигации, добаляя/удаляя активный класс
		button.classList.toggle('on') // добаляем/удаляем активный класс кнопке
	})

	window.addEventListener('click', e => { // при клике в любом месте окна браузера
		const target = e.target // находим элемент, на котором был клик
		if (!target.closest('.header-menu') && !target.closest('.menu__icon')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
			nav.classList.remove('active') // то закрываем окно навигации, удаляя активный класс
			button.classList.remove('on') // удаляем активный класс кнопкес
		}
	})

})


// -------------- js код на перенос классов в меню бургер
$(window).resize(function(event) {
	adaptive_function();
});
function adaptive_header(w,h) {
		var headerMenu = $('.header-menu');
		var headerLang = $('.header-top__language');
		var headerMenuRight = $('.header-bottom__rigth')
		var headerMenuLeft = $('.header-bottom__left')
		// =============  Условие которое перекидывает классы
	if(w<768){
		if(!headerLang.hasClass('done')){
			headerLang.addClass('done').appendTo(headerMenu);
		}
	}else {
		if(headerLang.hasClass('done')){
			headerLang.removeClass('done').prependTo($('.header-top'));
		}
	}
		// ====================================================
	if (w < 768) {
		if (!headerMenuRight.hasClass('done')) {
			headerMenuRight.addClass('done').appendTo(headerMenu);
		}
	} else {
		if (headerMenuRight.hasClass('done')) {
			headerMenuRight.removeClass('done').prependTo($('.header-bottom'));
		}
	}
		// ====================================================
	if (w < 768) {
		if (!headerMenuLeft.hasClass('done')) {
			headerMenuLeft.addClass('done').appendTo(headerMenu);
		}
	} else {
		if (headerMenuLeft.hasClass('done')) {
			headerMenuLeft.removeClass('done').prependTo($('.header-bottom'));
		}
	}
		// ====================================================
	
		// закаментированое условие, если бы у меня колонки называлась одинокого
		// сейчас название имеет Left Center Right а надо, чтобы называлась Column
		// вот видос (47minut)
		// https://www.youtube.com/watch?v=m4RVcsNMaOY&list=PLM6XATa8CAG4uCli-pMvuvwj46UaQoqIc&index=22
	// if (w < 768) {
	// 	if (!$('.header-bottom__menu').hasClass('done')) {
	// 		$('.header-bottom__menu').addClass('done').appendTo(headerMenu);
	// 	}
	// } else {
	// 	$.each($('.header-bottom__menu'), function(index, val) {
	// 		if ($(this).hasClass('menu-items_r')) {
	// 			if ($(this).hasClass('done')) {
	// 				$(this).removeClass('done').prependTo($('.header-bottom__right'));
	// 			}
	// 		}else{
	// 			if ($(this).hasClass('done')) {
	// 				$(this).removeClass('done').prependTo($('.header-bottom__right'));
	// 			}
	// 		}
	// 	});
	// }
}
function adaptive_function() {
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
	adaptive_header(w,h);
}
	adaptive_function();
