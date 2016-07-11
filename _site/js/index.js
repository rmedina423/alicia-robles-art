function enableFancybox(browserVW) {
	var $fancybox = $('.fancybox');

	if (browserVW >= 600) {
		$fancybox.fancybox();
	} else {
		$fancybox.on('click', function (event) {
			event.preventDefault();
		})
	}
}

function scrollToPosition(element) {

	var $target = $(element.attr('href'))
	var elementPosition = $target.offset().top
	var marginTop = $target.css('margin-top').replace(/[^\d]/g, "")
	var parsedMargin = parseInt(marginTop)

	return elementPosition - parsedMargin
}

function tabOnClick(event) {
	event.preventDefault()

	$('html, body').animate({
		scrollTop: scrollToPosition($(this))
	}, 500);
}

function contactFormOnSubmit(event) {
	event.preventDefault();

	var $contactForm = $('#contact-form');

	$.ajax({
		url: '//formspree.io/aliciaroblesart@gmail.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function () {
			$contactForm[0].reset();
			$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
		},
		success: function (data) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--success">Message sent!</div>');

			setTimeout(function () {
				$('.alert').fadeOut();
			}, 5000);
		},
		error: function (err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
		}
	});
}

$(document).ready(function () {

	$('#carousel').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true
	});

	enableFancybox($(window).width());

	$('.primary-tabs a').on('click', tabOnClick)

	// init Masonry
	var $portfolioContent = $('.portfolio .content').masonry();

	// layout Masonry after each image loads
	$portfolioContent.imagesLoaded().progress(function () {
		$portfolioContent.masonry('layout');
	});

	$('#contact-form').submit(contactFormOnSubmit);
})