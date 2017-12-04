// 切换
function tabSwitch($this,$menuid){
	var $others = $this.siblings('li'),
		$tab_list = $('.tab_list').filter(function(){
			return $(this).data('listid') == $menuid;
		}),
		$cur_index = $this.index();
	$others.removeClass('cur');
	$this.addClass('cur');
	$tab_list.find('.list_panel:eq('+ $cur_index +')').stop(false,true).show().siblings('.list_panel').stop(false,true).hide();
}

// 显示/隐藏 navlist
function showNavList($this){
	var $nav_list = $this.find('.nav_list');
	if(!$nav_list) return false;
	$nav_list.stop(false,true).slideDown(500);
}
function hideNavList($this){
	var $nav_list = $this.find('.nav_list');
	if(!$nav_list) return false;
	$nav_list.stop(false,true).hide();
}

$(document).ready(function(){
	$('#nav > ul > li').hover(function(e){
		showNavList($(this));
	},function(e){
		hideNavList($(this));
	});

	$('.tab_menu').on('click','li',function(e){
		var $this = $(this),
			$menuid = $this.closest('.tab_menu').data('menuid');
		tabSwitch($this,$menuid);
	});
})