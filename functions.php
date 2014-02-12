<?php 

function wpbootstrap_scripts_with_jquery()
{
	// Register the script like this for a theme:
	wp_register_script( 'custom-script', get_template_directory_uri() . '/js/bootstrap.js', array( 'jquery' ) );
	wp_register_script( 'collapse-script', get_template_directory_uri() . '/js/collapse.js', array( 'jquery' ) );
	wp_register_script( 'placeholders-script', get_template_directory_uri() . '/js/placeholders.min.js', array( 'jquery' ) );
	wp_register_script( 'fancybox-script', get_template_directory_uri() . '/js/fancybox.pack.js', array( 'jquery' ) );
	wp_register_script( 'imgLiquid-script', get_template_directory_uri() . '/js/imgLiquid.js', array( 'jquery' ) );
	wp_register_script( 'google_analytics-script', get_template_directory_uri() . '/js/google_analytics.js', array( 'jquery' ) );
	wp_register_script( 'app-script', get_template_directory_uri() . '/js/app.js', array( 'jquery' ) );
	wp_register_script( 'app-script', get_template_directory_uri() . '/js/app.js', array( 'jquery' ) );
	wp_register_script( 'app-script', get_template_directory_uri() . '/js/app.js', array( 'jquery' ) );
	// For either a plugin or a theme, you can then enqueue the script:
	wp_enqueue_script( 'custom-script' );
	wp_enqueue_script( 'collapse-script' );
	wp_enqueue_script( 'placeholders-script' );
	wp_enqueue_script( 'fancybox-script' );
	wp_enqueue_script( 'imgLiquid-script' );
	wp_enqueue_script( 'google_analytics-script' );
	wp_enqueue_script( 'app-script' );
}
add_action( 'wp_enqueue_scripts', 'wpbootstrap_scripts_with_jquery' );

if ( function_exists('register_sidebar') )
	register_sidebar(array(
		'before_widget' => '',
		'after_widget' => '',
		'before_title' => '<h3>',
		'after_title' => '</h3>',
	));
?>