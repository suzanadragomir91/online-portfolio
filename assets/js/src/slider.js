$(document).ready(function(){
	var slider = function(){
		var $slider = $('.project-container .slider');
		var $prev_button = $slider.find('.prev');
		var $next_button = $slider.find('.next');


		$next_button.click(function(){
			var $current_slide = $(this).parent('.slider').find('.slide.active');
			var $next_slide = $current_slide.next();

			$current_slide.removeClass('active');
			$next_slide.addClass('active');



		});

			$prev_button.click(function(){
				var $current_slide = $(this).parent('.slider').find('.slide.active');
				var $prev_slide = $current_slide.prev();

				$current_slide.removeClass('active');
				$prev_slide.addClass('active');


		});

	}

	slider();
});
