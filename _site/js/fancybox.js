var browserVW = $( window ).width();

if (browserVW >= 600) {
	$(".fancybox").fancybox();
} else {
	$('.fancybox').on('click', function (event) {
		event.preventDefault();
	})
}