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