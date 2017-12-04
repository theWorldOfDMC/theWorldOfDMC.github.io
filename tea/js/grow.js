$(document).ready(function(e){
	//切换功能
	//上次切换动作是否完成
	var $isFinish = true;
	//绑定切换事件，向前或者向后翻页
	$('.options > a').click(function(e){
		var $this = $(this),
			$cur_index = '',
			$scale_opacity_panel = $this.closest('.options').siblings('.scale_opacity_panel'),
			$panel_cur = $scale_opacity_panel.filter(function(index){
				$(this).hasClass('cur') ? $cur_index = index+1 : '';
				return $(this).hasClass('cur');
			});
		//向前
		if($this.hasClass('prev')){
			//判断是否再往左移动一步 就超出最左侧位置
			if($panel_cur.prev().length <= 0){
				//当前可移动范围剩余长度 小于 可移动范围总长度 并且 每次移动距离 比 最多可移动距离 大
				$this.css('opacity','0.3');
				return false;
			}
			if($isFinish){
				$isFinish = false;
				$this.siblings('.next').css('opacity','1');
				if($cur_index%2 == 1){
					$panel_cur.find('.scale_opacity_half_panel').each(function(index){
						var $_this = $(this);
						index == 0 ? $_this.css({
							'-moz-transform': 'translateX(-100%)',
						    '-webkit-transform': 'translateX(-100%)',
							'-ms-transform': 'translateX(-100%)',
							'-o-transform': 'translateX(-100%)',
							'transform': 'translateX(-100%)',
							'box-shadow': '0px 0px 40px 0 rgba(0, 0, 0, 0.7)'
						}) : $_this.css({
							'-moz-transform': 'translateX(100%)',
						    '-webkit-transform': 'translateX(100%)',
							'-ms-transform': 'translateX(100%)',
							'-o-transform': 'translateX(100%)',
							'transform': 'translateX(100%)',
							'box-shadow': '0px 0px 40px 0 rgba(0, 0, 0, 0.7)'
						});
					});
				}else{
					$panel_cur.find('.scale_opacity_half_panel').each(function(index){
						var $_this = $(this);
						index == 1 ? $_this.css({
							'-moz-transform': 'translateX(-100%)',
						    '-webkit-transform': 'translateX(-100%)',
							'-ms-transform': 'translateX(-100%)',
							'-o-transform': 'translateX(-100%)',
							'transform': 'translateX(-100%)',
							'box-shadow': '0px 0px 40px 0 rgba(0, 0, 0, 0.7)'
						}) : $_this.css({
							'-moz-transform': 'translateX(100%)',
						    '-webkit-transform': 'translateX(100%)',
							'-ms-transform': 'translateX(100%)',
							'-o-transform': 'translateX(100%)',
							'transform': 'translateX(100%)',
							'box-shadow': '0px 0px 40px 0 rgba(0, 0, 0, 0.7)'
						});
					});
				}
				
				$panel_cur.removeClass('cur').prev().addClass('cur')
				var $t = window.setTimeout(function(){
					$isFinish = true;
					window.clearTimeout($t);
				},500);
			}
		//向后
		}else{
			//判断是否再往右移动一步 就超出最右侧位置
			if(!$panel_cur.next().hasClass('scale_opacity_panel')){
				//当前可移动范围剩余长度 大于 0 小于 一次移动的长度
				$this.css('opacity','0.3');
				return false;
			}
			if($isFinish){
				$isFinish = false;
				$this.siblings('.prev').css('opacity','1');
				$panel_cur.removeClass('cur').next().addClass('cur').find('.scale_opacity_half_panel').css({
					'-moz-transform': 'translateX(0)',
				    '-webkit-transform': 'translateX(0)',
					'-ms-transform': 'translateX(0)',
					'-o-transform': 'translateX(0)',
					'transform': 'translateX(0)',
					'box-shadow': '0px 0px 40px 0 rgba(0, 0, 0, 0)'
				});
				var $t = window.setTimeout(function(){
					$isFinish = true;
					window.clearTimeout($t);
				},500);
			}
		}
	});
});