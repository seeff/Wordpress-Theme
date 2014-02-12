<?php get_header(); ?>
<div class="container">
	<div class="row">
	  <div class="col-md-12">

		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

	<div class="row text-center">
		<h1><?php the_title(); ?></h1>
	</div>
			
		  	<?php the_content(); ?>

		<?php endwhile; else: ?>
			<p><?php _e('Sorry, this page does not exist.'); ?></p>
		<?php endif; ?>

	  </div>
	 
	</div>
</div>
<?php get_footer(); ?>