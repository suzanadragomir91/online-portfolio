$(document).ready(function(){
	var wrapper_styling = function(){
		var header = $('header');
		var wrapper = $('.wrapper');
		var header_height = header.height();
		var window_height = $(window).height();
		var splash = $('.splash');

		wrapper.css({
			'padding-top': header_height + 100 + 'px' // "100" represents the header padding combined
		});

		splash.css({
			'height': 'initial'
		});
	}

	var splash_height = function(){
		var window_height = $(window).height();
		var splash = $('.splash');
		var wrapper = $('.wrapper');

		wrapper.css({
			'padding-top': 0
		});

		splash.css({
			'height': window_height + 'px'
		});
	}

	var adjust_splash = function(){
		var window_width = $(window).width();

		if (window_width >= 1024) {
			splash_height();
		} else {
			wrapper_styling();
		}
	}

	var restyle_header = function(){
		var window_top = $(document).scrollTop();

		if (window_top>0){
			$('header').addClass('fixed');
		} else {
			$('header').removeClass('fixed');
		}

	}

	var jump_link = $('.jump-link');

	jump_link.click(function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop:$( $(this).attr('href') ).offset().top
		}, 500);

	});

	var open_project_details = function() {
		var project = $('.project');

		project.click(function(){
			$(this).siblings('.details').slideToggle();
		});
	}

	open_project_details();

	adjust_splash();

	$(window).resize(function(){
		adjust_splash();
	});
	$(window).scroll(function(){
		restyle_header();
	});
});
