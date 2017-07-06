(function($){
	$.extend({
		popup : function(options){
			var setting = {
				type : 'alert',
				infotype : 'info',
				textinfo : 'popup窗口',
				callback : function(){},
				layer_close : function(){},
				layer_ok : function(){}
			}
			setting = $.extend({},setting,options);
			// alert
			var $str = '',
				$body = $('body');
			$str+=	'<div class="layer">';
			$str+=		'<div class="layer_panel">';
			$str+=			'<div class="info">';
			$str+=				'<i class="layer_close DMC icon-cuowu"></i>';
			$str+=				'<p class="info_text">';
			$str+=					'<i class="layer_close DMC icon-'+ setting.infotype +'"></i>';
			$str+=					'<span>'+ setting.textinfo +'</span>';
			$str+=				'</p>';
			$str+=			'</div>';
			$str+=			'<div class="btns">';
			$str+=				'<ul class="clearfix">';
			switch(setting.type){
				case 'alert' : $str+= '<li><a class="layer_ok" href="javascript:;">确 定</a></li>';break;
				case 'confirm' : $str+= '<li><a class="layer_ok" href="javascript:;">确 定</a></li>';
								   $str+= '<li><a class="layer_close" href="javascript:;">返 回</a></li>';
								   break;
			}
			$str+=				'</ul>';
			$str+=			'</div>';
			$str+=		'</div>';
			$str+=	'</div>';
			
			$body.append($str);
			if(typeof setting.layer_close == 'function') setting.layer_close();
			if(typeof setting.layer_ok == 'function') setting.layer_ok();
			$('.layer').stop(false,true).show(0,function(e){
				$(this).find('.layer_panel').css({
					transform:'scale(1)',
					'-webkit-transform':'scale(1)',
					'-moz-transform':'scale(1)',
					'-ms-transform':'scale(1)',
					'-o-transform':'scale(1)'
				});
			});
		
		}
	});
})(jQuery)