ImageFiller
===========================
A liquid-style element positioning jQuery plugin.

Introduction
-----------------------------

Allows you to evenly place images inside a container, just like 'Bing Images', 'Google Images', and 'Google+ Galleries'. Works great with liquid designs that require thumbnails to fill up the entire screen.

Usage
-----------------------------

Make sure to run this quick checklist for best results:

1. Make sure your <img> elements includes width and height attributes that provide the original width/height (Example: "<img src='/path/to/img1' width='source_file_width' height='source_file_height' class='image' />")
2. I recommend using a 'row_height' that is at least 30 pixels smaller then the actual height of the thumbnail images so that images aren't upsized (will result in low quality thumbnail)
3. Add "float:left" to your image's class otherwize the script will have to do it and it will eat up unnecessary CPU time on browsers that don't handle JS well
4. All images or div's with 'background-image' must contain the class 'img' or you can specify the class name as a property image_class: '.name_of_your_class'
5. Make sure all thumbnail images are the same height as well

Sample Javascript:

	$(function() {
		$('#container_id').imagefiller({
			padding:10,				// padding between images
			row_height:170,			// the starting height of images in a row
			image_class:'.image'	// the class on each <img>
		});
	});
	
Sample HTML:
	
	<div id='container_id'>
		<img src='/path/to/img1' width='source_file_width' height='source_file_height' class='image' />";
		<img src='/path/to/img2' width='source_file_width' height='source_file_height' class='image' />";
		<img src='/path/to/img3' width='source_file_width' height='source_file_height' class='image' />";
	</div>
	
Dependencies
-----------------------------

jQuery v1.9.1

License
-----------------------------

Copyright 2013 Charles Ross
https://github.com/charleshross

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Authors
-----------------------------

Charles Ross (mobcat40@gmail.com)

Contact
-----------------------------

Charles Ross (mobcat40@gmail.com)