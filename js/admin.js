/*
 * Flexible Posts Widget
 * Admin Scripts
 * Author: dpe415
 * URI: http://wordpress.org/extend/plugins/flexible-posts-widget/
 */
 
/* global ajaxurl, fpwL10n */

jQuery(function() {
	
	// Setup the show/hide thumbnails box
	jQuery('input.dpe-fp-thumbnail').each( function() {
		if( this.checked ) {
			jQuery(this).parent().next().slideDown('fast');
		} else {
			jQuery(this).parent().next().slideUp('fast');
		}
	});
	
	// Enable the Get Em By tabs
	jQuery('.dpe-fp-widget .getembytabs').tabs({
		// Set the active tab to a widget option
		activate: function() {
			jQuery(this).find('.cur_tab').val( jQuery( this ).tabs( 'option', 'active' ) );
		},
		// retrieve the saved active tab and set it for the UI
		create: function() {
			jQuery( this ).tabs( 'option', 'active', jQuery(this).find('.cur_tab').val() );
		}
	});
	
});

// Add the tabs functionality AJAX returns
jQuery(document).ajaxComplete(function() {
	jQuery('.dpe-fp-widget .getembytabs').tabs({
		// Set the active tab to a widget option
		activate: function() {
			jQuery(this).find('.cur_tab').val( jQuery(this).tabs( 'option', 'active' ) );
		},
		// retrieve the saved active tab and set it for the UI
		create: function() {
			jQuery(this).tabs( 'option', 'active', jQuery(this).find('.cur_tab').val() );
		}
	});
});

// Add event triggers to the show/hide thumbnails box
jQuery('#widgets-right').on('change', 'input.dpe-fp-thumbnail', function() {
	if( this.checked ) {
		jQuery(this).parent().next().slideDown('fast');
	} else {
		jQuery(this).parent().next().slideUp('fast');
	}
});
