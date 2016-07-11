function targetPosition(element) {

	var $targetClass = $(element.attr('href'))
	var elementPosition = $targetClass.offset().top
	var marginTop = $targetClass.css('margin-top').replace(/[^\d]/g, "")
	var parsedMargin = parseInt(marginTop)

	return elementPosition - parsedMargin
}

function tabOnClick(event) {
	event.preventDefault()

	var $this = $(this)

	$('html, body').animate({
		scrollTop: targetPosition($this)
	}, 500);
}

$(document).ready(function () {

	$('.primary-tabs a').on('click', tabOnClick)

	// init Masonry
	var $portfolioContent = $('.portfolio .content').masonry();

	// layout Masonry after each image loads
	$portfolioContent.imagesLoaded().progress(function () {
		$portfolioContent.masonry('layout');
	});

	var $contactForm = $('#contact-form');

	$contactForm.submit(function (event) {
		event.preventDefault();

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
	});
})