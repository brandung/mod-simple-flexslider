/**
 * mod flexslider
 * https://github.com/brandung/mod-simple-flexslider
 *
 * @require {loadModule}
 * @require {flexslider}
 */
Brandung.Plugins.modFlexslider = function () {
	$('.mod-simple-flexslider').loadModule([
		Brandung.folderPath + '/libs/vendor/flexslider/flexslider.css',
		Brandung.folderPath + '/libs/vendor/flexslider/jquery.flexslider-min.js'
	],
	function () {
		$('.mod-simple-flexslider .flexslider').flexslider({
			animation: "slide"
		});
	});
};

Brandung.Plugins.modFlexslider();
