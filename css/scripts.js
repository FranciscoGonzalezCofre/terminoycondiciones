jQuery('document').ready(function($){

	var menuBtn = $('.menu-icon'),
		menu = $('.navigation ul');

	menuBtn.click(function() {

		if( menu.hasClass('show') ){
			menu.removeClass('show');
		} else {

		menu.addClass('show');

		}
	
	});

	window.addEventListener("scroll", function(){
		var header = document.querySelector("header");
		header.classList.toggle("abajo",window.scrollY>0);
	})

});