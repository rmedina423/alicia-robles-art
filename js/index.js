$(document).ready(function() {

	function targetPosition(element) {

		var $targetClass = $(element.attr('href'))
		var elementPosition = $targetClass.offset().top
		var marginTop = $targetClass.css('margin-top').replace(/[^\d]/g, "")
		var parsedMargin = parseInt(marginTop)

		return elementPosition - parsedMargin
	}


	$('.primary-tabs a').on('click', function(event) {
		event.preventDefault()

		var $this = $(this)

		$('html, body').animate({
			scrollTop: targetPosition($this)
		}, 500);

	})

	// init Masonry
	var $portfolioContent = $('.portfolio .content').masonry();

	// layout Masonry after each image loads
	$portfolioContent.imagesLoaded().progress( function() {
		$portfolioContent.masonry('layout');
	});

})