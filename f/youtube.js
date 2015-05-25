$(function(){
	$('a').each(function(){
		var href = $(this).attr('href') + '&output=embed';
		if ( /https?:\/\/(www.)?youtube.com/.test(href) ){
			var iframe = $('<div class="video youtube"><iframe width="425" height="349" src="' + href + '" frameborder="0" allowfullscreen></iframe></div>');
			var item = $(this);
			iframe.insertAfter(item);
			item.remove();
		}
	});
});
