<?php get_header(); ?>


<div class="container">
  <div class="col-md-8">
		<div class="row">
			<?php the_post(); ?>
		</div>

		<div class="row">
			<small>Let us tell you about </small>
			<h1><?php the_author_link(); ?></h1>
		</div>

		<div class="row">
			<?php if ( '' != get_the_author_meta( 'user_description' ) ) echo apply_filters( 'archive_meta', '<div class="archive-meta">' . get_the_author_meta( 'user_description' ) . '</div>' ); ?>
			<?php rewind_posts(); ?>
		</div>

		<div class="row">
			<?php while ( have_posts() ) : the_post(); ?>
			<?php get_template_part( 'entry' ); ?>
			<?php endwhile; ?>
			<?php get_template_part( 'nav', 'below' ); ?>
		</div>
	</div>

	<div class="col-md-3 col-md-offset-1">
		<?php get_sidebar(); ?>	
  </div>

	</div>
</div>

<?php get_footer(); ?>


