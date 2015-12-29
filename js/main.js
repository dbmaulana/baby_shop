function resize() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	
	// STICKY FOOTER
	var footerHeight = $('footer').outerHeight();
	var footerTop = (footerHeight) * -1
	$('footer').css({marginTop: footerTop});
	$('#main-wrapper').css({paddingBottom: footerHeight});
	
}

$(window).load(function() {
	// PRELOADER
	if ($('body').hasClass('hide')) {
		$('.preloader').fadeOut(1000, function(){
			setTimeout(function(){$('.preloader').remove(); },2000);
			$('body').removeClass('hide');
		});
		$('body').removeClass('hide');
	} else {
		$('.preloader').fadeOut(1000, function(){
			$('.preloader').remove();
		});
	}
	
			// Testimonial
			$('#testimonial .flexslider').flexslider({
				animation: "slide",
				directionNav: true,
				controlNav: false,
				prevText: "",
				nextText: ""
			});
			
	
});

$(document).ready(function() {
	$('footer h4.title').click(function() {
		$(this).toggleClass('active');
		$(this).next().slideToggle(250);
	});
});

$(window).load(function() {
	resize();
});