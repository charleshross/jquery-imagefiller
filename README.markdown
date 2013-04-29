ImageFiller
===========================
A liquid-style element positioning jQuery plugin.

Introduction
-----------------------------

Allows you to evenly place images inside a container, just like 'Bing Images', 'Google Images', and 'Google+ Galleries'. Works great with liquid designs that require thumbnails to fill up the entire screen.

Usage
-----------------------------
I recommend using a 'row_height' that is ~30 pixels smaller then the actual height of the thumbnail images.
All images or div's with 'background-image' must contain the class 'img' or you can specify the class name as a property image_class: 'name_of_your_class'
Make sure all thumbnail images are the same height as well.

	$('#id_to_your_container').imagefiller({
		padding:10,
		row_height:170
	});

Dependencies
-----------------------------

jQuery v1.9.1

License
-----------------------------

MIT

Authors
-----------------------------

Charles Ross (mobcat40@gmail.com)

Contact
-----------------------------

Charles Ross (mobcat40@gmail.com)