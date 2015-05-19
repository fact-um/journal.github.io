//<script type="text/javascript" src="http://yastatic.net/jquery/2.1.3/jquery.min.js"></script>

$(function(){
	function init(){
		var image = $('head meta[property="og:image"]').attr('content');
		if ( image ){
			var href = location.href;
			var elem = $('[title=Twitter]','.ya_share');
			var title = document.title.slice(0, 50);
			var new_href = 'https://share.yandex.net/go.xml?service=twitter&url=' + encodeURI(href);
			new_href += '&title=' + encodeURI(title) + '%20' + encodeURI(image) + '%20@FactumMeJournal';
			console.log( 11, new_href );
			elem.attr('href', new_href);
		}
	}
	function wait(){
		if ( $('[title=Twitter]','.ya_share').length ){
			init();
		}else{
			setTimeout( wait ,150);
		}
	}
	wait();
});
