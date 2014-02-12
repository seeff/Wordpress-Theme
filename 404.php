<?php get_header(); ?>
<div class="container">
	<div class="row">
	  <div class="col-md-12">


	<div class="row text-center">
		<h1 class="page-title"><?php _e( 'Not Found', 'twentyfourteen' ); ?></h1>
	</div>
		
		<div class="row">
		  <div class="col-md-8 col-md-offset-2">
			<?php endwhile; else: ?>
				<p><?php _e('Ouch, this sucks :( It there seems to be an issue with this page. '); ?></p>
			<?php endif; ?>
			</div>
		</div>

	  </div>
	 
	</div>

</div>
<?php get_footer(); ?>