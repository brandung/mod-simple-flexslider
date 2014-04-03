mod-simple-flexslider
=====================

Basic Flexslider Module

Needs [flexslider](https://github.com/woothemes/flexslider) and [jquery](https://github.com/jquery/jquery) to work properly.

### HTML Markup:

```JavaScript
<!-- mod: simple flexslider -->
<h2 class="mod-headline">Flexslider Module</h2>
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

### JavaScript Snippet:

```JavaScript
Brandung.Plugins.modFlexslider = function () {
	$('.mod-simple-flexslider-wrapper').loadModule([
		Brandung.folderPath + '/libs/vendor/flexslider/flexslider.css',
		Brandung.folderPath + '/libs/vendor/flexslider/jquery.flexslider-min.js'
	],
	function () {
		$('.mod-simple-flexslider-wrapper .flexslider').flexslider({
			animation: "slide"
		});
	});
};

Brandung.Plugins.modFlexslider();
```
