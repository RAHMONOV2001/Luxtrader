let user_icon = document.querySelector('.user-header__icon');
let user_menu = document.querySelector('.user-header__menu');
user_icon.addEventListener("click", function (e) {
	user_menu.classList.toggle('active');
});

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.user-header')) {
		user_menu.classList.remove('active');
	}
});
//добавляет клас active в меню бургер
// $('.wrapper').addClass('loaded');

$('.icon-menu').click(function (event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});
//===========================================================================================================================

//<ibg>=========================================================================================================================
function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg()
//</ibg>=========================================================================================================================

//<Swiper>======================================================================================================================
let sliders = document.querySelectorAll('.swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}
		if (slider.classList.contains('gallery')) {
			// slider.data('LightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}
//</Swiper>======================================================================================================================

//<Инициализация swipera>=======================================================================================================
function sliders_bild_callback(params) { }

let main_slider = new Swiper('.main-slider__body', {

	//обновит свайпер при изминении элементов слайдера
	observer: true,
	//обновит свайпер при изминении родителских элементов слайдера
	observeParents: true,
	// количество слайдов для показа
	slidesPerView: 1,
	// отступ между слайдами
	spaceBetween: 0,
	//Автовысота
	// autoHeight: false,
	//скорост
	speed: 800,
	// бесконечный слайдер
	loop: true,
	// Arrows
	navigation: {
		nextEl: '.control-main-slider__arrow_next',
		prevEl: '.control-main-slider__arrow_prev',
	},
	breakpoints: {
		320: {
			autoHeight: true,
		},
		768: {
			autoHeight: false,
		}
	},
	on: {
		LazyImageReady: function () {
			ibg();
		},
	}
});
let lots_slider = new Swiper('.slider-lots__body', {

	//обновит свайпер при изминении элементов слайдера
	observer: true,
	//обновит свайпер при изминении родителских элементов слайдера
	observeParents: true,
	// количество слайдов для показа
	slidesPerView: 3,
	// отступ между слайдами
	spaceBetween: 0,
	//Автовысота
	// autoHeight: false,
	//скорост
	speed: 800,
	// бесконечный слайдер
	loop: true,
	// Arrows
	navigation: {
		nextEl: '.control-slider-lots__arrow_next',
		prevEl: '.control-slider-lots__arrow_prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		550: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
	}

});
let quotes_slider = new Swiper('.slider-quotes__body', {
	effect: "fade",
	//обновит свайпер при изминении элементов слайдера
	observer: true,
	//обновит свайпер при изминении родителских элементов слайдера
	observeParents: true,
	// количество слайдов для показа
	slidesPerView: 1,
	// отступ между слайдами
	spaceBetween: 0,
	//Автовысота
	// autoHeight: false,
	//скорост
	speed: 1000,
	// бесконечный слайдер
	loop: true,
	// Arrows
	navigation: {
		nextEl: '.control-slider-quotes__link',
	},
	on: {
		LazyImageReady: function () {
			ibg();
		},
	}
});
//</Инициализация swipera>=======================================================================================================


