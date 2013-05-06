/**
 * jQuery-ImageFiller
 * Version: 1.0
 * Build Date: 2013-04-26
 * Copyright (c) 2013, Charles Ross (https://github.com/charleshross). All rights reserved.
 * License: MIT
 * Website: https://github.com/charleshross/
 * Prerequisites : jQuery
 */

(function( $ ) {
	$.fn.imagefiller = function( options ) {
		
		var that = this;
		 
		// Settings
		var settings = $.extend( {
			// Starting row height
			'row_height' : 100,
			// Starting padding
			'padding' : 0,
			// Class attached to image
			'image_class' : '.img'
		}, options);

		// div of img's
		container = this;
		
		// starting height of images
		row_height = settings.row_height;
		
		// Padding between images
		padding = settings.padding;
		
		// Image Class
		image_class = settings.image_class;
		
		/*
		 * General Variables
		 */
		
		// fetch canvas width
		container_width = container.width();
		
		// starting point of first row in canvas
		current_row = container_width;
		
		// jquery object of row of images
		images = $();
		
		// width of all images placed so far
		total_current_width = 0;
		
		// 2nd round of adjustments (width of those images added together)
		placed_width = 0;
		
		// Getting First Image to perform 'nesting' detection
		nested = false;
		first = this.find("img:first").parent().attr('id');
		if (first != this.attr('id')) {
			nested = true;
		}
		
		// Detect if images are floating (if images aren't then this whole thing won't work)
		is_floating = false;
		if (this.children(":first").css('float') == 'left') {
			is_floating = true;
		}
		
		// 1st Round Loop through each IMG
		$(image_class).each(function(index, Element) {
			
			// Force float left if no float:left
			if (!is_floating) {
				$(this).css('float','left');
			}
			
			// Padding
			if (padding > 0) {
				
				// Apply spacing to img container div
				if (nested) {
					$(this).parent().css('margin-right',padding+'px');
				
				// Apply spacing directly to img
				} else {
					$(this).css('margin-right',padding+'px');
				}
				
			}
			
			// Push this image into row
			images = images.add($(this));
			
			// Resource Width
			width = $(this).attr('width');
			
			// Resource Height
			height = $(this).attr('height');
			
			// First computed width with new row_height limit
			new_width = (row_height * width) / height;
			new_width = Math.round(new_width);
			
			// Adjusting Image to first computed row_height adjusted width/height (later we'll fill the gap if there is one)
			$(this).width(new_width).height(row_height);
			
			// same to parent div (container should have same width)
			if (nested) {
				$(this).parent().width(new_width);
			}
			
			// Fetch first computed width of next image (allows us to see if it spills over canvas edge)
			// Check if next image is right nextdoor or if we have to travel up and over (nested = true)
			if (nested) {
				next = $(this).parent().next().find(image_class);
			} else {
				next = $(this).nextAll(image_class);
			}
			
			// Fetching next image's future new_width
			next_width = next.width();
			next_height = next.height();
			next_new_width = (row_height * next_width) / next_height;
			next_new_width = Math.round(next_new_width);
			
			// Subtracting first computed width of image against canvas' current_row
			current_row = current_row - (new_width + padding);
			
			// Future space on canvas if next image was subtracted from current_row (did it fall off edge or not? integer will be < 1)
			next_current_row = current_row - (next_new_width + padding);
			
			// Total width of all image's width added together in row
			total_current_width = total_current_width + new_width + padding;
			
			if (next_current_row < 1) {
				
				// Remove padding from last image in row
				if (nested) {
					$(this).parent().css('margin-right',0);
				} else {
					$(this).css('margin-right',0);
				}
				
				current_row = current_row + padding;
				
				// Space left (first we started with full canvas width and then we kept subtracting new_width of images)
				gap = current_row;
				
				total_current_width = total_current_width - padding;
				
				// New row_height to expand images if all images in row were one big image
				new_row_height = (container_width * row_height) / total_current_width;
				new_row_height = Math.floor(new_row_height);
				
				placed_width = placed_width - padding;
				
				// 2nd Round Loop through images in locked row to perform expansion
				$.each(images, function(key,valueObj){
					
					// Everyone but final row gets this bottom margin
					if (padding > 0) {
						if (nested) {
							$(this).parent().css('margin-bottom',padding+'px');
						
						} else {
							$(this).css('margin-bottom',padding+'px');
						}
					}
					
					// Fetch Width/Height of images (aspect ratios based on initial row_height)
					width = $(this).width();
					height = $(this).height();
					
					// New width based on increased new row_height
					new_final_width = (new_row_height * width) / height;
					new_final_width = Math.floor(new_final_width);
					
					// Applying second round of row_height & new_width
					$(this).width(new_final_width);
					$(this).height(new_row_height);
					
					// same to parent div (container should have same width)
					if (nested) {
						$(this).parent().width(new_final_width);
					}
					
					// Space taken up in 2nd round of adjustments so far
					placed_width = placed_width + new_final_width + padding;
					
				});
				
				// 2nd round gap
				new_gap = container_width - placed_width;
				
				// 2nd round gap divided between each image (how many pixels to hand out to each image for 3rd round)
				bump = new_gap / images.length;
				bump = Math.ceil(bump);
				
				// 3rd Round
				$.each(images, function(key,valueObj){
					
					// If it didn't fit perfectly on 2nd round
					if (new_gap > 0) {
						
						// Get image width
						width = $(this).width();
						
						// Hand image extra pixel(s)
						adjust_width = width + bump;
						$(this).width(adjust_width);
						
						// same to parent div (container should have same width)
						if (nested) {
							$(this).parent().width(adjust_width);
						}
						
						// Subtract pixels handed outo
						new_gap = new_gap - bump;
						
						// Rest of bump added to last image in queue
						if (new_gap < bump) {
							
							bump = new_gap;
							
						}
						
					}
					
				});
				
				// Resetting current_row to default
				current_row = container_width;
				
				// Reseting variables for next image
				images = null;
				images = $();
				total_current_width = 0;
				placed_width = 0;
				gap = 0;
				
			}
			
		});


		
	};
})( jQuery );