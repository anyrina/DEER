//header sclorll
jQuery(function(){

	var header = jQuery('#top_header');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 0) { //スクロールが10pxを越えたら
			header.addClass('invert');
		} else { //スクロールが500pxを越えなければ
			header.removeClass('invert');
		}
	});
});

//slider
var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
  } );
  
  splide.mount();
