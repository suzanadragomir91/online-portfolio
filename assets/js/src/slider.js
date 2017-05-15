$(document).ready(function(){
	var slider = function(){
		var $slider 		= $('.project-container .slider');
		var $prev_button 	= $slider.find('.prev');
		var $next_button 	= $slider.find('.next');

		$prev_button.click(function(){
			var $current_slide 	= $(this).parent('.slider').find('.slide.active');
			var $prev_slide 	= $current_slide.prev();
			var slide_count 	= $current_slide.index();

			if (slide_count == 0) {
				$current_slide.removeClass('active');
				$(this).parent('.slider').find('.slide').last().addClass('active');
			} else {
				$current_slide.removeClass('active');
				$prev_slide.addClass('active');
			}
		});

		$next_button.click(function(){
			var $current_slide 	= $(this).parent('.slider').find('.slide.active');
			var $next_slide 	= $current_slide.next();
			var slide_length 	= $(this).parent('.slider').find('.slide').length-1;
			var slide_count 	= $current_slide.index();

			if (slide_count == slide_length) {
				$current_slide.removeClass('active');
				$(this).parent('.slider').find('.slide').first().addClass('active');
			} else {
				$current_slide.removeClass('active');
				$next_slide.addClass('active');
			}
		});
	}

	slider();
});
