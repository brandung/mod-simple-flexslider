/**
 * mod flexslider
 * https://github.com/brandung/mod-simple-flexslider
 *
 * @type {{modFlexslider: modFlexslider}}
 * @dependencies {flexslider}
 */
Brandung.Plugins.modFlexslider = function () {
	if ($('.mod-simple-flexslider-wrapper').length !== 0) {
		$.when(
				$('<link>')
					.appendTo($('head'))
					.attr({
						type: 'text/css',
						rel: 'stylesheet'
					})
					.attr('href', Brandung.folderPath + '/libs/vendor/flexslider/flexslider.css'),
				$.get(Brandung.folderPath + '/libs/vendor/flexslider/jquery.flexslider-min.js')
			).then(function () {
				$('.mod-simple-flexslider-wrapper .flexslider').flexslider({
					animation: "slide"
				});
			});
	}
};

Brandung.Plugins.modFlexslider();