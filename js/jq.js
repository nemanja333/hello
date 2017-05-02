$(document).ready(function (){
		scrollSpy();
	$(window).scroll(function(){
		parallaxMU();
		parallaxETF();
		
	});

});

	function parallax (){

		var wScroll =$(window).scrollTop();
		$('parallax').css('background-position', 'center '+(wScroll)+'px');
	};

	function parallaxETF (){

		var wScroll =$(window).scrollTop();
		$('parallax').css('background-position', 'center '+(wScroll)+'px');

	};
	function scrollSpy (){
		$('body').scrollspy({
			target:'#nav',
			offset:50
		});
	};


