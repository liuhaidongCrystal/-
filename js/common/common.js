define(['jquery'], function($) {
	
	// 左侧导航下拉列表
	$('.navs a').on('click', function() {
		$(this).next().slideToggle();
	});
});
