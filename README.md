mod-simple-flexslider
=====================

Basic Flexslider Module

Needs [flexslider](https://github.com/woothemes/flexslider) and [jquery](https://github.com/jquery/jquery) to work properly.

## HTML Snippet:

```JavaScript
<!-- mod: simple flexslider -->
<h2 class="mod-headline">Flexslider Modul</h2>
<section class="mod-simple-flexslider-wrapper">
	<div class="flexslider">
		<ul class="slides">
			<li>Slide Content</li>
			<li>Slide Content</li>
			<li>Slide Content</li>
			<li>Slide Content</li>
		</ul>
	</div>
</section>
<hr>
<!-- // -->
});
```

## JavaScript Snippet:

```JavaScript
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
});
```
