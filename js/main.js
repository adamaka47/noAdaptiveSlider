$(document).ready(function() {
	var nowSlider = 1,
			allSlider = $('.slider_wrapper').children().length,
			sliderWrap = $('.slider_wrapper'),
			widthTr,
			time = 1500,
			btn1 = $('.arrow-left'),
			btn2 = $('.arrow-right')
			dotItem = $('.dots li');

			// dots

		// $(dotItem).on('click', function() {
		// 	$('.active').removeClass('active');
		// 	$(this).toggleClass('active');
		// 	dotBtn = $(this).index();
		// 	if (dotBtn + 1 != nowSlider) {
		// 		widthTr = -$('.viewport').width() * (dotBtn);
		// 		$(sliderWrap).css('transform', 'translate('+widthTr+'px, 0)');
		// 		nowSlider = dotBtn + 1;
		// 	}
		// });


		// arrows

	// btn1.on('click', prev); button slider prev
	// btn2.on('click', next); button slider next

	// autofunction (custom)

	setInterval(next, time);

	function next() {
		if (nowSlider === allSlider || nowSlider > allSlider || nowSlider <= 0) {
			$(sliderWrap).css('transform', 'translate(0, 0)');
			nowSlider = 1;
		} else {
			widthTr = -$('.viewport').width() * nowSlider
			$(sliderWrap).css('transform', 'translate('+widthTr+'px, 0)');
			nowSlider++;
		}
	}

	function prev() {
		if (nowSlider === 1 || nowSlider > allSlider || nowSlider <= 0) {
			widthTr = -$('.viewport').width() * (allSlider - 1);
			$(sliderWrap).css('transform', 'translate('+widthTr+'px, 0)');
			nowSlider = allSlider;
		} else {
			widthTr = -$('.viewport').width() * (nowSlider - 2);
			$(sliderWrap).css('transform', 'translate('+widthTr+'px, 0)');
			nowSlider--;
		}
	}

});	