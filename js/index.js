$( document ).ready(function() {

	$('.primary-tabs a').on('click', function(event) {
		event.preventDefault()

		var $currentTarget = $(event.currentTarget)
		var targetHref = $currentTarget.attr('href')

		if (targetHref === '#about') {
			$('html, body').animate({
				scrollTop: $('.about').offset().top
			}, 500);
		}

		if (targetHref === '#portfolio') {
			$('html, body').animate({
				scrollTop: $('.portfolio').offset().top
			}, 500);
		}

		if (targetHref === '#contact') {
			$('html, body').animate({
				scrollTop: $('.contact').offset().top
			}, 500);
		}
		
	})

})