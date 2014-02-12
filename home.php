<?php get_header(); ?>
<div class="container">
	<div class="row">
		<h1>Sock Blog<h1>
		<h4 class="text-muted">We write about anything sock related and post the coolest sock pictures around</h4>
	</div>


		<div class="row">
	  <div class="col-md-4">
		<?php get_sidebar(); ?>	
	  </div>
	  <div class="col-md-8">

		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
			<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
		    <p><em><?php the_time('l, F jS, Y'); ?></em></p>
		  	<?php the_content(); ?>

		<?php endwhile; else: ?>
			<p><?php _e('Sorry, there are no posts.'); ?></p>
		<?php endif; ?>

	  </div>

	</div>
</div>
<?php get_footer(); ?>
