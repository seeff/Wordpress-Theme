<?php get_header(); ?>


<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

  <h1><?php the_title(); ?></h1>  
  <?php the_content(); ?>

<?php endwhile; else: ?>
	<div class="row">
	  <div class="col-md-8 col-md-offset-2">
		  <p><?php _e('Woops, there seems to be an error with the site. No posts matched your criteria.'); ?></p>
	 </div>
	</div>	 
<?php endif; ?>


<?php get_footer(); ?>
