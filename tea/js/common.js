$(document).ready(function(e){
	$('.menu').hover(function(e){
		e.stopPropagation();
		var $this = $(this),
			$list = $this.find('.list'),
			$other_menu = $this.siblings('.menu'),
			$other_list = $other_menu.find('.list');
		if(e.type == 'mouseenter'){
			$other_menu.removeClass('cur');
			$other_list.stop(false,true).slideUp();
			$this.addClass('cur');
			$list.stop(false,true).slideDown();
		}
	});
	$('.list').hover(function(e){
		e.stopPropagation();
		e.type == 'mouseleave' ? $('.menu .list').stop(false,true).slideUp() : '';
	});
});