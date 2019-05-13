$(document).ready(function() {
	new WOW().init();
	
	$(".toggle-button").click(function(){
		$(".mobile-nav").animate({display: 'block'}).slideDown("slow");
	});
	
	$(".close").click(function(){
		$(".mobile-nav").animate({display: 'block'}).slideUp("slow");
	});

});