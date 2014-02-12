<?php get_header(); ?>
<div class="container">
	<div class="row">

	  <div class="col-md-8">

		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
			<h1><?php the_title(); ?></h1>
			<small>Posted on <?php the_time('l, F jS, Y'); ?> by <?php the_author_posts_link() ?> </small>

		  	<?php the_content(); ?>

		  	<hr>
			<?php comments_template(); ?>

		<?php endwhile; else: ?>
			<p><?php _e('Sorry, this page does not exist.'); ?></p>
		<?php endif; ?>

		


	  </div>
	  
	<div class="col-md-3 col-md-offset-1">
		<?php get_sidebar(); ?>	
	  </div>

	</div>
</div>
<?php get_footer(); ?>
