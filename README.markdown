ImageFiller
===========================
A liquid-style element positioning jQuery plugin.

Introduction
-----------------------------

Allows you to evenly place images inside a container, just like 'Bing Images', 'Google Images', and 'Google+ Galleries'. Works great with liquid designs that require thumbnails to fill up the entire screen.

Usage
-----------------------------

Required steps:

1. Make sure your `<img>` elements includes width and height attributes that provide the original width/height (Example: `<img src='/path/to/img1' width='source_file_width' height='source_file_height' class='image' />`)
2. All `<img>` elements or div's with 'background-image' must contain the class 'img' or you can specify the class name as a property `image_class: '.name_of_your_class'`

Best performance checklist:

1. Make sure the source images all have the same height, this isn't required but it will help them look better in browsers that don't perform bicubic softening (only Chrome and Safari at the time of this writing support such image softening)
2. I recommend using a 'row_height' that is at least 30 pixels smaller then the actual height of the thumbnail images so that images aren't upsized (will result in low quality thumbnail)
3. Add `float:left` to your `<img>` image's class otherwize the script will have to do it and it will eat up unnecessary CPU time on browsers that don't handle JS well

Sample Code:

	<script type="text/javascript">
	$(function() {
		$('#container_id').imagefiller({
			padding:10,				// Optional: padding between images
			padding_bottom:20,		// Optional: for different bottom padding
			row_height:170,			// the starting height of images in a row
			image_class:'.image'	// the class on each <img>
		});
	});
	<script>
	
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