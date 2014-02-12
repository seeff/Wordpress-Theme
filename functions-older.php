<?php 

function wpbootstrap_scripts_with_jquery()
{
	// Register the script like this for a theme:
	wp_register_script( 'custom-script', get_template_directory_uri() . '/js/bootstrap.js', array( 'jquery' ) );
	wp_enqueue_script( 'collapse', get_template_directory_uri() . '/js/collapse.js', array( 'jquery' ) );
	wp_enqueue_script( 'jquery.colorbox.js', get_template_directory_uri() . '/js/jquery.colorbox.js.js', array( 'jquery' ) );
	wp_enqueue_script( 'placeholders', get_template_directory_uri() . '/js/placeholders.min.js', array( 'jquery' ) );
	wp_enqueue_script( 'imgLiquid', get_template_directory_uri() . '/js/imgLiquid.js', array( 'jquery' ));
	wp_enqueue_script( 'app', get_template_directory_uri() . '/js/app.js');
	// For either a plugin or a theme, you can then enqueue the script:
	wp_enqueue_script( 'custom-script' );
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


